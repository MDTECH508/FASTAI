/* ============================================
   BLAST FLIX - Main App (Adapted to Real Data)
   ============================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    AppState.user = loadUserFromStorage();
    renderBannerSlider();
    renderCategoryTabs();
    renderMovies(TRENDING_MOVIES);
    setupHero();
    setupEventListeners();
    Player.init();

    setTimeout(() => {
      document.getElementById("loader")?.classList.add("hidden");
    }, 600);
  });

  /* ---------- BANNER SLIDER (Hero) ---------- */
  let bannerIndex = 0;
  let bannerTimer = null;

  function renderBannerSlider() {
    if (!BANNER_ITEMS.length) return;
    updateHero(BANNER_ITEMS[bannerIndex]);
    bannerTimer = setInterval(() => {
      bannerIndex = (bannerIndex + 1) % BANNER_ITEMS.length;
      updateHero(BANNER_ITEMS[bannerIndex]);
    }, 6000);
  }

  function updateHero(item) {
    const bg = document.getElementById("heroBg");
    const title = document.getElementById("heroTitle");
    const meta = document.getElementById("heroMeta");
    const desc = document.getElementById("heroDesc");

    if (bg && item.image) {
      bg.style.backgroundImage = `url(${item.image})`;
      bg.style.transition = "background-image 0.8s ease-in-out";
    }
    if (title) title.textContent = item.title;
    if (meta) {
      meta.innerHTML = `
        <span>${item.year || ""}</span>
        ${item.rating ? `<span>⭐ ${item.rating}</span>` : ""}
        ${item.genre ? `<span>${item.genre}</span>` : ""}
      `;
    }
    if (desc) desc.textContent = item.description || "";

    const playBtn = document.getElementById("playHero");
    if (playBtn) {
      playBtn.onclick = () => {
        const movie = BANNER_ITEMS[bannerIndex];
        Player.open({
          title: movie.title,
          description: movie.description,
          poster: movie.image,
          year: movie.year,
          rating: parseFloat(movie.rating) || 0,
          genre: movie.genre,
          subtitles: movie.genre,
          videoUrl: buildVideoUrl({ id: movie.detailPath })
        });
      };
    }
    const infoBtn = document.getElementById("infoHero");
    if (infoBtn) infoBtn.onclick = playBtn.onclick;
  }

  /* ---------- CATEGORY TABS ---------- */
  function renderCategoryTabs() {
    const container = document.getElementById("categoryTabs");
    if (!container) return;

    const tabs = [
      { code: "Trending", name: "🔥 Populaire" },
      ...CATEGORY_FILTERS.map(f => ({ code: f.title, name: f.title }))
    ];

    container.innerHTML = tabs.map((t, i) => `
      <button class="cat-pill ${i === 0 ? "active" : ""}" data-code="${t.code}">${t.name}</button>
    `).join("");

    container.querySelectorAll(".cat-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".cat-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        AppState.currentCategory = btn.dataset.code;
        filterMovies();
      });
    });
  }

  function filterMovies() {
    let movies = [];
    switch (AppState.currentCategory) {
      case "Trending":
        movies = TRENDING_MOVIES;
        break;
      case "Hollywood":
        movies = HOLLYWOOD_MOVIES;
        break;
      default:
        movies = AppState.allMovies;
    }

    if (AppState.searchQuery) {
      const q = AppState.searchQuery.toLowerCase();
      movies = movies.filter(m =>
        m.title.toLowerCase().includes(q) ||
        (m.genre || "").toLowerCase().includes(q)
      );
    }
    renderMovies(movies);
  }

  /* ---------- MOVIE GRID ---------- */
  function renderMovies(movies) {
    const grid = document.getElementById("movieGrid");
    if (!grid) return;

    if (!movies.length) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-secondary);">
        <p>Aucun film trouvé.</p></div>`;
      return;
    }

    grid.innerHTML = movies.map(movie => `
      <div class="movie-card" data-id="${movie.id || movie.title}">
        ${movie.rating ? `<div class="rating-badge">⭐ ${parseFloat(movie.rating).toFixed(1)}</div>` : ""}
        <img class="movie-poster" src="${movie.poster}" alt="${escapeHtml(movie.title)}"
          loading="lazy" onerror="this.replaceWith(window.placeholderDiv())">
        <div class="movie-info">
          <div class="movie-title">${escapeHtml(movie.title)}</div>
          <div class="movie-meta">
            <span>${movie.year || ""}</span>
            <span>${escapeHtml((movie.genre || "").split(",")[0] || "")}</span>
          </div>
        </div>
      </div>
    `).join("");

    grid.querySelectorAll(".movie-card").forEach(card => {
      card.addEventListener("click", () => {
        const movie = movies.find(m => (m.id || m.title) === card.dataset.id);
        if (movie) {
          AppState.currentMovie = movie;
          Player.open({
            ...movie,
            subtitles: movie.subtitles,
            videoUrl: buildVideoUrl(movie)
          });
        }
      });
    });
  }

  /* ---------- HERO SETUP (legacy) ---------- */
  function setupHero() {}

  /* ---------- EVENT LISTENERS ---------- */
  function setupEventListeners() {
    document.getElementById("searchBtn")?.addEventListener("click", () => {
      document.getElementById("searchOverlay")?.classList.add("active");
      setTimeout(() => document.getElementById("searchInput")?.focus(), 100);
    });
    document.getElementById("closeSearch")?.addEventListener("click", () => {
      document.getElementById("searchOverlay")?.classList.remove("active");
    });
    document.getElementById("searchInput")?.addEventListener("input", e => {
      AppState.searchQuery = e.target.value.trim();
      filterMovies();
    });
    document.getElementById("profileBtn")?.addEventListener("click", () => {
      if (!AppState.user) openAuthModal();
      else showToast(`👤 ${AppState.user.name}`);
    });
    document.getElementById("loginBtn")?.addEventListener("click", () => {
      const fakeUser = { name: "Utilisateur Blast", email: "user@blastflix.app" };
      AppState.user = fakeUser;
      saveUserToStorage(fakeUser);
      closeAuthModal();
      showToast("✅ Connecté !");
    });
    document.getElementById("guestBtn")?.addEventListener("click", () => {
      AppState.user = { name: "Invité", guest: true };
      saveUserToStorage(AppState.user);
      closeAuthModal();
      showToast("👤 Mode invité");
    });
    document.getElementById("closeAuth")?.addEventListener("click", closeAuthModal);

    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tab = btn.dataset.tab;
        if (tab === "search") {
          document.getElementById("searchOverlay")?.classList.add("active");
          setTimeout(() => document.getElementById("searchInput")?.focus(), 100);
        } else if (tab === "profile") {
          if (!AppState.user) openAuthModal();
          else showToast(`👤 ${AppState.user.name}`);
        }
      });
    });
  }

  function openAuthModal() { document.getElementById("authModal")?.classList.add("active"); }
  function closeAuthModal() { document.getElementById("authModal")?.classList.remove("active"); }

  function showToast(msg) {
    const old = document.getElementById("blastToast");
    if (old) old.remove();
    const t = document.createElement("div");
    t.id = "blastToast";
    t.textContent = msg;
    t.style.cssText = `
      position:fixed;bottom:120px;left:50%;transform:translateX(-50%) translateY(20px);
      background:rgba(20,20,20,0.92);backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,0.15);color:#f3f4f6;
      padding:14px 24px;border-radius:50px;font-size:14px;font-weight:600;
      z-index:1000;opacity:0;transition:all 0.35s;box-shadow:0 8px 32px rgba(0,0,0,0.5);`;
    document.body.appendChild(t);
    requestAnimationFrame(() => {
      t.style.opacity = "1";
      t.style.transform = "translateX(-50%) translateY(0)";
    });
    setTimeout(() => {
      t.style.opacity = "0";
      t.style.transform = "translateX(-50%) translateY(20px)";
      setTimeout(() => t.remove(), 400);
    }, 2600);
  }

  function escapeHtml(str) {
    return String(str || "").replace(/&/g,"&amp;").replace(/</g,"&lt;")
      .replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  }

  window.placeholderDiv = function () {
    const d = document.createElement("div");
    d.className = "movie-poster-placeholder";
    d.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16"/></svg>`;
    return d;
  };
})();
