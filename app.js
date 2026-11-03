/* ============================================
   BLAST FLIX - Main App
   Affiche films + poster + SVG icons fonctionnels
   ============================================ */

(function () {
  "use strict";

  /* ============================================
     INIT
     ============================================ */
  document.addEventListener("DOMContentLoaded", () => {
    AppState.user = loadUserFromStorage();
    renderBannerSlider();
    renderCategoryTabs();
    renderMovies(TRENDING_MOVIES);
    setupEventListeners();
    Player.init();

    setTimeout(() => {
      document.getElementById("loader")?.classList.add("hidden");
    }, 600);
  });

  /* ============================================
     BANNER SLIDER (Hero)
     ============================================ */
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
    }
    if (title) title.textContent = item.title;
    if (meta) {
      meta.innerHTML = `
        <span>${icon('calendar', 14)} ${item.year || ""}</span>
        ${item.rating ? `<span>${icon('star', 14)} ${item.rating}</span>` : ""}
        ${item.genre ? `<span>${icon('tag', 14)} ${item.genre}</span>` : ""}
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
          videoUrl: buildVideoUrl({ id: movie.detailPath })
        });
      };
    }
    const infoBtn = document.getElementById("infoHero");
    if (infoBtn) infoBtn.onclick = playBtn?.onclick;
  }

  /* ============================================
     CATEGORY TABS
     ============================================ */
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
        movies = AppState.allMovies || TRENDING_MOVIES;
    }

    if (AppState.searchQuery) {
      const q = AppState.searchQuery.toLowerCase();
      movies = movies.filter(m =>
        (m.title || "").toLowerCase().includes(q) ||
        (m.genre || "").toLowerCase().includes(q)
      );
    }
    renderMovies(movies);
  }

  /* ============================================
     🎬 AFICHE FILM YO AK POSTER + SVG ICONS
     ============================================ */
  function renderMovies(movies) {
    const grid = document.getElementById("movieGrid");
    if (!grid) return;

    if (!movies || !movies.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-secondary);">
          ${icon('search', 48)}
          <p style="margin-top:16px;">Aucun film trouvé.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = movies.map(movie => {
      // === POSTER (URL API oswa placeholder SVG) ===
      const posterHtml = movie.poster
        ? `<img class="movie-poster" src="${movie.poster}" alt="${escapeHtml(movie.title)}"
             loading="lazy"
             onerror="this.outerHTML='<div class=&quot;movie-poster-placeholder&quot;>${icon('image', 48).replace(/"/g, '&quot;')}</div>'">`
        : `<div class="movie-poster-placeholder">${icon('image', 48)}</div>`;

      // === RATING (SVG star) ===
      const ratingHtml = movie.rating
        ? `<div class="rating-badge">${icon('star', 12)} ${parseFloat(movie.rating).toFixed(1)}</div>`
        : "";

      // === META (SVG calendar + tag) ===
      const genre = (movie.genre || "").split(",")[0] || "";
      const metaHtml = `
        <div class="movie-meta">
          ${movie.year ? `<span>${icon('calendar', 11)} ${movie.year}</span>` : ""}
          ${genre ? `<span>${icon('tag', 11)} ${escapeHtml(genre)}</span>` : ""}
        </div>
      `;

      // === BOOKMARK (SVG fonksyonèl) ===
      const bookmarkHtml = `
        <button class="movie-bookmark" data-id="${movie.id || movie.title}" title="Ajouter à ma liste">
          ${icon('bookmark', 16)}
        </button>
      `;

      return `
        <div class="movie-card" data-id="${movie.id || movie.title}">
          ${ratingHtml}
          ${bookmarkHtml}
          ${posterHtml}
          <div class="movie-info">
            <div class="movie-title">${escapeHtml(movie.title)}</div>
            ${metaHtml}
          </div>
        </div>
      `;
    }).join("");

    // === CLICK SOU KAT → OUVRIR PLAYER ===
    grid.querySelectorAll(".movie-card").forEach(card => {
      card.addEventListener("click", (e) => {
        // Pa louvri player si klike sou bookmark
        if (e.target.closest(".movie-bookmark")) return;

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

    // === BOOKMARK BUTTONS ===
    grid.querySelectorAll(".movie-bookmark").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.classList.toggle("active");
        const active = btn.classList.contains("active");
        if (typeof showToast === "function") {
          showToast(active ? "🔖 Ajouté à ma liste" : "Retiré de ma liste");
        }
      });
    });
  }

  /* ============================================
     EVENT LISTENERS
     ============================================ */
  function setupEventListeners() {
    // === SEARCH OPEN/CLOSE ===
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

    // === PROFILE ===
    document.getElementById("profileBtn")?.addEventListener("click", () => {
      if (!AppState.user) openAuthModal();
      else showToast(`👤 ${AppState.user.name}`);
    });

    // === AUTH ===
    document.getElementById("loginBtn")?.addEventListener("click", () => {
      const fakeUser = {
        name: "Utilisateur Blast",
        email: "user@blastflix.app",
        premium: false
      };
      AppState.user = fakeUser;
      saveUserToStorage(fakeUser);
      closeAuthModal();
      showToast("✅ Connecté !");
    });
    document.getElementById("guestBtn")?.addEventListener("click", () => {
      AppState.user = { name: "Invité", guest: true, premium: false };
      saveUserToStorage(AppState.user);
      closeAuthModal();
      showToast("👤 Mode invité");
    });
    document.getElementById("closeAuth")?.addEventListener("click", closeAuthModal);

    // === BOTTOM NAV ===
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        // Ripple
        btn.classList.add("rippling");
        setTimeout(() => btn.classList.remove("rippling"), 600);

        document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tab = btn.dataset.tab;

        if (tab === "search") {
          document.getElementById("searchOverlay")?.classList.add("active");
          setTimeout(() => document.getElementById("searchInput")?.focus(), 100);
        } else if (tab === "profile") {
          if (!AppState.user) openAuthModal();
          else showToast(`👤 ${AppState.user.name}`);
        } else if (tab === "downloads") {
          showToast("⬇️ Aucun téléchargement pour l'instant");
        }
      });
    });
  }

  /* ============================================
     AUTH HELPERS
     ============================================ */
  function openAuthModal() {
    document.getElementById("authModal")?.classList.add("active");
  }
  function closeAuthModal() {
    document.getElementById("authModal")?.classList.remove("active");
  }

  /* ============================================
     TOAST NOTIFICATION
     ============================================ */
  function showToast(msg) {
    const old = document.getElementById("blastToast");
    if (old) old.remove();

    const t = document.createElement("div");
    t.id = "blastToast";
    t.textContent = msg;
    t.style.cssText = `
      position:fixed;bottom:120px;left:50%;
      transform:translateX(-50%) translateY(20px);
      background:rgba(20,20,20,0.92);
      backdrop-filter:blur(20px);
      -webkit-backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,0.15);
      color:#f3f4f6;
      padding:14px 24px;
      border-radius:50px;
      font-size:14px;
      font-weight:600;
      z-index:10000;
      opacity:0;
      transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow:0 8px 32px rgba(0,0,0,0.5);
      pointer-events:none;
      white-space:nowrap;
      max-width:calc(100% - 40px);
      overflow:hidden;
      text-overflow:ellipsis;
    `;
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

  /* ============================================
     HELPERS
     ============================================ */
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Expose showToast pou lòt fichye (player.js) ka itilize l
  window.showToast = showToast;
})();
