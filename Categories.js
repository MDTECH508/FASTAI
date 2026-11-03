/* ============================================
   BLAST FLIX - Data + SVG Icons
   Done konplè soti nan API a
   ============================================ */

/* ============================================
   🎨 SVG ICONS FONKSYONÈL
   ============================================ */
const SVG_ICONS = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 9h5M2 15h5M17 9h5M17 15h5"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
  fire: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 0.67s0.74 2.65 0.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l0.03-0.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.08-2.05-7.69-5.17-9.87z"/></svg>`
};

function icon(name, size = 20) {
  const svg = SVG_ICONS[name] || SVG_ICONS.image;
  return svg.replace('<svg ', `<svg width="${size}" height="${size}" `);
}

/* ============================================
   📡 PLATFORM LIST (soti API)
   ============================================ */
const PLATFORM_LIST = [
  { name: "Netflix",    uploadBy: "Regina" },
  { name: "PrimeVideo", uploadBy: "Lakimora" },
  { name: "Disney",     uploadBy: "samrawit" },
  { name: "AppleTV",    uploadBy: "Arf Yldrım" },
  { name: "Viu",        uploadBy: "Daniel" },
  { name: "Hulu",       uploadBy: "Andy" },
  { name: "Zee5",       uploadBy: "Hassan Amadil" },
  { name: "Vivamax",    uploadBy: "Deborah Nzolani" },
  { name: "Hoichoi",    uploadBy: "Arun Jain" },
  { name: "Showmax",    uploadBy: "Koka" }
];

/* ============================================
   🎞️ CATEGORY FILTERS (soti API)
   ============================================ */
const CATEGORY_FILTERS = [
  {
    title: "Hollywood",
    url: "http://h5.aoneroom.com/web/film?type=/home/movieFilter&tabId=2&filterType={\"classify\":\"All\",\"country\":\"United States\",\"genre\":\"All\",\"sort\":\"ForYou\",\"year\":\"All\"}",
    image: "https://pbcdnw.aoneroom.com/image/2025/04/02/07496ee6b3985714f9735b6916c8b82d.jpg"
  },
  {
    title: "Nollywood",
    url: "http://h5.aoneroom.com/web/film?type=/home/movieFilter&tabId=2&filterType={\"classify\":\"All\",\"country\":\"All\",\"genre\":\"Nollywood\",\"sort\":\"ForYou\",\"year\":\"All\"}",
    image: "https://pbcdnw.aoneroom.com/image/2025/04/02/cc10a311628f23ef42f6e1c61f0b114d.jpg"
  },
  {
    title: "Bollywood",
    url: "http://h5.aoneroom.com/web/film?type=/home/movieFilter&tabId=2&filterType={\"classify\":\"All\",\"country\":\"India\",\"genre\":\"All\",\"sort\":\"ForYou\",\"year\":\"All\"}",
    image: "https://pbcdnw.aoneroom.com/image/2025/04/02/df2ffb0852de0d888be285ddad68fa50.jpg"
  },
  {
    title: "Western",
    url: "http://h5.aoneroom.com/web/film?type=/home/movieFilter&tabId=5&filterType={\"classify\":\"All\",\"country\":\"United States\",\"genre\":\"All\",\"sort\":\"ForYou\",\"year\":\"All\"}",
    image: "https://pbcdnw.aoneroom.com/image/2025/04/02/db1b94cbbe291698498481e6a6cef59a.jpg"
  },
  {
    title: "K-Drama",
    url: "http://h5.aoneroom.com/web/film?type=/home/movieFilter&tabId=5&filterType={\"classify\":\"All\",\"country\":\"Korea\",\"genre\":\"All\",\"sort\":\"ForYou\",\"year\":\"All\"}",
    image: "https://pbcdnw.aoneroom.com/image/2025/04/02/0616e08832e4f715e82fdd7782ff6c9b.jpg"
  }
];

/* ============================================
   🎬 BANNER ITEMS (Hero Slider)
   ============================================ */
const BANNER_ITEMS = [
  {
    title: "The Abandons",
    image: "https://pbcdnw.aoneroom.com/image/2025/12/04/1db87ad838b33bf57b9240aa48f01dab.png",
    detailPath: "the-abandons-UMqVoh8VOg",
    description: "When a corrupt force of wealth and power covets the lands of a group of diverse and atypical families and tries to drive them out, they must pursue their Manifest Destiny.",
    rating: "6.7",
    year: "2025",
    genre: "Drama,Western",
    subtitles: "English,Français,Indonesian,Malay,Português,Русский,اَلْعَرَبِيَّةُ"
  },
  {
    title: "Now You See Me: Now You Don't",
    image: "https://pbcdnw.aoneroom.com/image/2025/12/02/a5cd37f09a0c43db592d772c0216dfcb.png",
    detailPath: "now-you-see-me-now-you-dont-WZI0j8zK2W6",
    description: "A diamond heist reunites retired Horsemen illusionists with new performers Greenblatt, Smith and Sessa as they target dangerous criminals.",
    rating: "6.3",
    year: "2025",
    genre: "Crime,Thriller",
    subtitles: "English,Filipino,Français,Indonesian,Malay,اَلْعَرَبِيَّةُ,বাংলা"
  },
  {
    title: "Troll 2",
    image: "https://pbcdnw.aoneroom.com/image/2025/12/03/ba26ef410257cc1fd0d60f4347739154.png",
    detailPath: "troll-2-english-GHTOTcYuzJ7",
    description: "Nora, Andreas and Captain Kris leap back into action when a dangerous new troll awakes - and this time they'll need more help to take it down.",
    rating: "7.0",
    year: "2025",
    genre: "Action,Adventure,Drama",
    subtitles: "English"
  },
  {
    title: "Stranger Things",
    image: "https://pbcdnw.aoneroom.com/image/2025/11/27/5d4d61c6fa4fdcbfdcd5a456102dd20e.png",
    detailPath: "stranger-things-wsymkZvcaU5",
    description: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
    rating: "8.6",
    year: "2016",
    genre: "Drama,Fantasy,Horror",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Türkçe,tiếng Việt,Русский,اَلْعَرَبِيَّةُ,اُردُو,فارسی,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,ภาษาไทย,中文"
  },
  {
    title: "Sidelined 2: Intercepted",
    image: "https://pbcdnw.aoneroom.com/image/2025/11/28/7184d1d44329e631c9ff825096de9cb8.png",
    detailPath: "sidelined-2-intercepted-6VDaxQM1kg9",
    description: "Star QB Drayton and dancer Dallas face relationship challenges amid his recovery from a setback and her doubts about her future.",
    rating: "7.0",
    year: "2025",
    genre: "Romance",
    subtitles: "English,Filipino,Français,Indonesian,Malay,اَلْعَرَبِيَّةُ,বাংলা"
  },
  {
    title: "Regretting You",
    image: "https://pbcdnw.aoneroom.com/image/2025/11/26/265048a43dbb03a6c3972bc32b0463be.png",
    detailPath: "regretting-you-Cjo4f8liX85",
    description: "A mother and daughter must grapple with what's left after a devastating accident reveals a shocking betrayal.",
    rating: "6.0",
    year: "2025",
    genre: "Drama,Romance",
    subtitles: "English,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা"
  },
  {
    title: "Bel-Air",
    image: "https://pbcdnw.aoneroom.com/image/2025/11/26/a359e9200e73279931de8d134abc2d88.png",
    detailPath: "bel-air-yHFEhjS0vc1",
    description: "The life of a teen is forever transformed when he moves from the streets of west Philadelphia to live with his relatives in one of Los Angeles's wealthiest suburbs.",
    rating: "6.4",
    year: "2022",
    genre: "Drama",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Русский,اَلْعَرَبِيَّةُ,اُردُو,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,中文"
  },
  {
    title: "Outlaws",
    image: "https://pbcdnw.aoneroom.com/image/2025/11/18/37418ce893b05e061f48a9d1863976d6.png",
    detailPath: "outlaws-6xNQb8AZYo2",
    description: "Set in the lush but lawless land on the border between Lesotho and KwaZulu-Natal, Outlaws is the story of two families at war with each other.",
    rating: "6.8",
    year: "2023",
    genre: "Drama",
    subtitles: "English,Filipino,Français,Indonesian,Kiswahili,Русский,اَلْعَرَبِيَّةُ,বাংলা"
  },
  {
    title: "Landman S2",
    image: "https://pbcdnw.aoneroom.com/image/2025/11/27/27f72e90a3094f6e61f767944485a799.png",
    detailPath: "landman-EOXbCKpZL22",
    description: "A modern-day tale of fortune seeking in the world of West Texas oil rigs.",
    rating: "8.2",
    year: "2024",
    genre: "Drama",
    subtitles: "English,Filipino,Français,Indonesian,Русский,اَلْعَرَبِيَّةُ,اُردُو,বাংলা"
  }
];

/* ============================================
   🔥 TRENDING MOVIES (soti API - 20 fim)
   ============================================ */
const TRENDING_MOVIES = [
  {
    id: "4956801153355891744",
    title: "Stranger Things",
    description: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/01/56d9b04173d90d3f74bb5a7e1112ed7e.jpg",
    year: "2016",
    rating: 8.6,
    genre: "Drama,Fantasy,Horror",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Türkçe,tiếng Việt,Русский,اَلْعَرَبِيَّةُ,اُردُو,فارسی,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,ภาษาไทย,中文",
    detailPath: "stranger-things-wsymkZvcaU5",
    country: "United States"
  },
  {
    id: "1008516032576771104",
    title: "Bel-Air",
    description: "The life of a teen is forever transformed when he moves from the streets of west Philadelphia to live with his relatives.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/01/b7092c27e35d9b58b31fd679e35ed6ea.jpg",
    year: "2022",
    rating: 6.4,
    genre: "Drama",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Русский,اَلْعَرَبِيَّةُ,اُردُو,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,中文",
    detailPath: "bel-air-yHFEhjS0vc1",
    country: "United States"
  },
  {
    id: "227711592396478040",
    title: "The Abandons",
    description: "When a corrupt force of wealth and power covets the lands of a group of diverse and atypical families.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/01/fa46824a82234b25f90dea876a85da84.jpg",
    year: "2025",
    rating: 6.7,
    genre: "Drama,Western",
    subtitles: "English,Français,Indonesian,Malay,Português,Русский,اَلْعَرَبِيَّةُ",
    detailPath: "the-abandons-UMqVoh8VOg",
    country: "United States"
  },
  {
    id: "7535775794330062000",
    title: "Heated Rivalry",
    description: "Two rival hockey stars at the top of their game face an unexpected challenge when they develop feelings for each other.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/30/1d43575838c499fd5383d52100da3290.jpeg",
    year: "2025",
    rating: 6.6,
    genre: "Drama,Sport",
    subtitles: "English,Español,Filipino,Français,Indonesian,Malay,Português,Русский,اَلْعَرَبِيَّةُ,বাংলা,中文",
    detailPath: "heated-rivalry-AgDCIMQVFY8",
    country: "Canada"
  },
  {
    id: "6998664604679571240",
    title: "The Herd",
    description: "The Herd",
    poster: "https://pbcdnw.aoneroom.com/image/2025/10/06/472f3a01a90a5ac784520745b22484ba.jpg",
    year: "2025",
    rating: 6.1,
    genre: "Thriller",
    subtitles: "English,Filipino,Français,Indonesian,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "the-herd-2hU5z5pXZk8",
    country: "Nigeria"
  },
  {
    id: "5539220821668940352",
    title: "Youngins",
    description: "A hard-hitting teen telenovela set at a boarding school in Johannesburg.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/04/75532e05361b14f083fd8d6cec8e594e.jpg",
    year: "2024",
    rating: 8.4,
    genre: "Drama",
    subtitles: "English,Filipino,Français,Indonesian,Русский,اَلْعَرَبِيَّةُ,اُردُو,বাংলা",
    detailPath: "youngins-qPxHkRMGbB6",
    country: "South Africa"
  },
  {
    id: "80115926032598168",
    title: "SLEEPY HEAD",
    description: "Maurice Sam, Mercy Eke, Isoken Igbinigie, 2025 Latest Full Nigerian Movie",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/26/b1a15e8ae12d844bf3df556619dbbc07.jpeg",
    year: "2025",
    rating: 6.3,
    genre: "Drama",
    subtitles: "",
    detailPath: "sleepy-head-maurice-sam-mercy-eke-isoken-igbinigie-2025-latest-full-nigerian-movie-AaWOVNLVU5",
    country: "Nigeria"
  },
  {
    id: "2016806085985744984",
    title: "Outlaws",
    description: "Set in the lush but lawless land on the border between Lesotho and KwaZulu-Natal.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/03/8cc4792821ccd90d507232eb03619523.jpg",
    year: "2023",
    rating: 6.8,
    genre: "Drama",
    subtitles: "English,Filipino,Français,Indonesian,Kiswahili,Русский,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "outlaws-6xNQb8AZYo2",
    country: "South Africa"
  },
  {
    id: "5373583835403911072",
    title: "The Shadow's Edge",
    description: "Macau Police brings the tracking expert police officer out of retirement to help catch a dangerous group of professional thieves.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/25/3ff9a901b8c383d789e4c4a2fc56ffdc.jpg",
    year: "2025",
    rating: 7.4,
    genre: "Action,Crime,Drama",
    subtitles: "English,Español,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা,ខេមរភាសា,中文",
    detailPath: "the-shadows-edge-YsfCvPo4Xo6",
    country: "Hongkong, China"
  },
  {
    id: "7972206956398400280",
    title: "Power Book IV: Force",
    description: "Follows Tommy Egan after he cuts ties and puts New York in his rearview mirror for good.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/01/c638fb3ed583126402f6ee5545cf0ac0.jpg",
    year: "2022",
    rating: 8.1,
    genre: "Crime,Drama",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Türkçe,tiếng Việt,Русский,اَلْعَرَبِيَّةُ,اُردُو,فارسی,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,ภาษาไทย,中文",
    detailPath: "power-book-iv-force-yhwvt88NUu9",
    country: "United States"
  },
  {
    id: "8551787290014663888",
    title: "Dear X",
    description: "A woman dons a mask to flee her situation and rise to power, causing devastation along her path.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/03/4c259736189c9a20e42e96a5dd7e5c73.jpg",
    year: "2025",
    rating: 6.8,
    genre: "Crime,Drama,Romance",
    subtitles: "English,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা,ខេមរភាសា",
    detailPath: "dear-x-mZjVxV8hJba",
    country: "Korea"
  },
  {
    id: "2540915058863915040",
    title: "The Manipulated",
    description: "Mild-mannered Tae Jung is wrongfully imprisoned for a heinous crime.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/30/e095d03a689dc34ca01e92c04bce8872.jpg",
    year: "2025",
    rating: 8.0,
    genre: "Action,Crime,Drama",
    subtitles: "English,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা,ខេមរភាសា",
    detailPath: "the-manipulated-wkqcEvUpH13",
    country: "Korea"
  },
  {
    id: "6642751429658696096",
    title: "Taxi Driver",
    description: "The story of a deluxe taxi driver who gets revenge on behalf of his passengers.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/02/96a9c51973ee296b4539d48c40740ad2.jpg",
    year: "2021",
    rating: 8.1,
    genre: "Action,Crime,Drama",
    subtitles: "English,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Русский,اَلْعَرَبِيَّةُ,اُردُو,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,ខេមរភាសា,中文",
    detailPath: "taxi-driver-STi4l34SHU7",
    country: "Korea"
  },
  {
    id: "7638377634019562528",
    title: "The Oval",
    description: "Newly-elected U.S. President Hunter Franklin and his family move into the White House.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/01/7e05da813f798e1271a9d22e7a0832fe.jpg",
    year: "2019",
    rating: 4.4,
    genre: "Crime,Drama,Thriller",
    subtitles: "English,Filipino,Français,Indonesian,Kiswahili,Português,Русский,اَلْعَرَبِيَّةُ,اُردُو,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,中文",
    detailPath: "the-oval-Me5h4IJQf69",
    country: "United States"
  },
  {
    id: "3819281169544270880",
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/25/a0556db0b6923ac7c210fe8b92168135.jpg",
    year: "2019",
    rating: 7.9,
    genre: "Action,Adventure,Drama",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Türkçe,tiếng Việt,Νέα Ελληνικά,Русский,اَلْعَرَبِيَّةُ,اُردُو,فارسی,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,ภาษาไทย,中文,日本語,한국어",
    detailPath: "the-witcher-qdCxXLAl8y4",
    country: "Poland"
  },
  {
    id: "1716151170995028536",
    title: "Landman",
    description: "A modern-day tale of fortune seeking in the world of West Texas oil rigs.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/02/fb97784b6e658e8c6d7813fb0cd8975d.jpg",
    year: "2024",
    rating: 8.2,
    genre: "Drama",
    subtitles: "English,Filipino,Français,Indonesian,Русский,اَلْعَرَبِيَّةُ,اُردُو,বাংলা",
    detailPath: "landman-EOXbCKpZL22",
    country: "United States"
  },
  {
    id: "1163978523174912112",
    title: "Ajosepo",
    description: "A young couple must deal with all kinds of family tensions on the eve of their wedding.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/03/b04aa69cc737d9c8b23dd69b60cf2f13.jpg",
    year: "2024",
    rating: 8.8,
    genre: "Comedy,Drama,Romance",
    subtitles: "",
    detailPath: "ajosepo-qvhGAD62Zn1",
    country: "Nigeria"
  },
  {
    id: "6345447110997328152",
    title: "Maxton Hall",
    description: "Quick-witted scholarship student Ruby unwittingly witnesses a secret at Maxton Hall.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/03/ff6604f0c8c3c65e866442a4230f5bea.jpeg",
    year: "2024",
    rating: 7.5,
    genre: "Drama,Romance",
    subtitles: "English",
    detailPath: "maxton-hall-the-world-between-us-english-0EeSENkdKy7",
    country: "Germany"
  },
  {
    id: "5014224821543227976",
    title: "Tyler Perry's Finding Joy",
    description: "Stranded in Colorado after a devastating holiday revelation, a talented but overlooked NYC designer finds unexpected love.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/02/ac47f00a9d7ea9acf6c12f849fa7e169.jpg",
    year: "2025",
    rating: 4.5,
    genre: "Drama",
    subtitles: "English,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "tyler-perrys-finding-joy-KB9mVRzcpY5",
    country: "United States"
  },
  {
    id: "4353442402246478680",
    title: "Last Samurai Standing",
    description: "In 1878, 292 samurais gather for a battle royale lured by a 100 billion yen prize.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/12/71475ce6dd9c4d383c844d29a17a5435.jpg",
    year: "2025",
    rating: 7.6,
    genre: "Action,Drama,History",
    subtitles: "English",
    detailPath: "last-samurai-standing-english-yvnt2PmOAb5",
    country: "Japan"
  }
];

/* ============================================
   🎥 HOLLYWOOD MOVIES (soti API - 14 fim)
   ============================================ */
const HOLLYWOOD_MOVIES = [
  {
    id: "5821547884994614176",
    title: "Now You See Me: Now You Don't",
    description: "A diamond heist reunites retired Horsemen illusionists with new performers.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/01/aec3f8fb67dbc4ae8bf1888a6688ebed.jpg",
    year: "2025",
    rating: 6.3,
    genre: "Crime,Thriller",
    subtitles: "English,Filipino,Français,Indonesian,Malay,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "now-you-see-me-now-you-dont-WZI0j8zK2W6"
  },
  {
    id: "6492015427626457040",
    title: "Troll 2 [English]",
    description: "Nora, Andreas and Captain Kris leap back into action when a dangerous new troll awakes.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/01/08db8bc2c65a6fd73be7295ed5ce38b7.jpg",
    year: "2025",
    rating: 7.0,
    genre: "Action,Adventure",
    subtitles: "English",
    detailPath: "troll-2-english-GHTOTcYuzJ7"
  },
  {
    id: "163946302454269272",
    title: "Troll [English]",
    description: "Deep in the Dovre mountain, something gigantic wakes up after a thousand years in captivity.",
    poster: "https://pbcdnw.aoneroom.com/image/2023/02/16/c8e25015a849bb216255f9d2316162a7.jpg",
    year: "2022",
    rating: 5.8,
    genre: "Action,Adventure",
    subtitles: "English",
    detailPath: "troll-english-Q4TOKAiS6c"
  },
  {
    id: "8834570753744978984",
    title: "Now You See Me 2",
    description: "The Four Horsemen resurface, and are forcibly recruited by a tech genius to pull off their most impossible heist yet.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/19/25889aec29ec399d6bd19c19e5829d5c.jpg",
    year: "2016",
    rating: 6.4,
    genre: "Action,Adventure,Comedy",
    subtitles: "English,Español,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Türkçe,tiếng Việt,Русский,اَلْعَرَبِيَّةُ,اُردُو,فارسی,হَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,ภาษาไทย,中文",
    detailPath: "now-you-see-me-2-EICCZnwqCwa"
  },
  {
    id: "4057615725207375656",
    title: "Now You See Me",
    description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/19/e862fd33937b7ed1c9966c842ad7b627.jpg",
    year: "2013",
    rating: 7.2,
    genre: "Crime,Mystery,Thriller",
    subtitles: "English,Filipino,Français,Indonesian,Kiswahili,Malay,Português,Русский,اَلْعَرَبِيَّةُ,اُردُو,هَرْشٜن هَوْس,বাংলা,ਪੰਜਾਬੀ,中文",
    detailPath: "now-you-see-me-mPUblheVJP4"
  },
  {
    id: "7774660775821954096",
    title: "Sidelined 2: Intercepted",
    description: "Star QB Drayton and dancer Dallas face relationship challenges amid his recovery.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/03/a4203bfb98b2e31c33181b87ec5ab420.jpg",
    year: "2025",
    rating: 7.0,
    genre: "Romance",
    subtitles: "English,Filipino,Français,Indonesian,Malay,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "sidelined-2-intercepted-6VDaxQM1kg9"
  },
  {
    id: "4317740177360931888",
    title: "Regretting You",
    description: "A mother and daughter must grapple with what's left after a devastating accident reveals a shocking betrayal.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/04/51195406c983bc7d69f71487426ca0b3.jpg",
    year: "2025",
    rating: 6.0,
    genre: "Drama,Romance",
    subtitles: "English,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "regretting-you-Cjo4f8liX85"
  },
  {
    id: "7447650280961201464",
    title: "Wildcat",
    description: "A former special ops squad comes together for one last mission - a high-stakes robbery to rescue their commander's young daughter.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/03/e8250f8d49a5cbf67a41b067eda1ccf2.jpg",
    year: "2025",
    rating: 6.2,
    genre: "Action,Thriller",
    subtitles: "English,Filipino,Français,Indonesian,Malay,اَلْعَرَبِيَّةُ",
    detailPath: "wildcat-e5zdDHFjaS8"
  },
  {
    id: "4715839452634038304",
    title: "Altered",
    description: "In an alternate present, genetically enhanced humans dominate society.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/03/830b6774569cfa84a7842d5f3c0e3bdc.jpg",
    year: "2025",
    rating: 6.2,
    genre: "Action,Sci-Fi",
    subtitles: "English,Filipino,Français,Indonesian,Malay,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "altered-AI18v7SAmC5"
  },
  {
    id: "6092338351556673576",
    title: "Sidelined: The QB and Me",
    description: "A headstrong dancer and a cocky quarterback fight against their feelings for each other.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/02/87237de3c25e9a82129167f32086df17.jpg",
    year: "2024",
    rating: 5.8,
    genre: "Romance",
    subtitles: "English,Filipino,Français,Indonesian,Русский,اَلْعَرَبِيَّةُ,اُردُو,বাংলা",
    detailPath: "sidelined-the-qb-and-me-IC22r9pY2g7"
  },
  {
    id: "5370415023565297240",
    title: "Two Worlds, One Wish",
    description: "A world-renowned archaeologist and a pragmatic lawyer reconnect years after their childhood bond.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/11/26/48763033921392832814378e23b42716.jpg",
    year: "2025",
    rating: 6.0,
    genre: "Romance",
    subtitles: "English,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ",
    detailPath: "two-worlds-one-wish-english-K9Xyw7AyIo6"
  },
  {
    id: "2497891359995187112",
    title: "Bugonia",
    description: "Two conspiracy-obsessed young men kidnap the high-powered CEO of a major company.",
    poster: "https://pbcdnw.aoneroom.com/image/2025/12/03/530d8a482358e876e270b3f90d5fadd1-s.jpg",
    year: "2025",
    rating: 7.6,
    genre: "Comedy,Crime,Sci-Fi",
    subtitles: "English,Filipino,Français,Indonesian,Malay,Português,اَلْعَرَبِيَّةُ,বাংলা",
    detailPath: "bugonia-5ztc7wHgBd1"
  }
];

/* ============================================
   🌐 LANGUAGES (pou player meni)
   ============================================ */
const LANGUAGES = [
  { lan: "en",    lanIOS3: "eng", lanName: "English" },
  { lan: "hi",    lanIOS3: "hin", lanName: "हिन्दी" },
  { lan: "fr",    lanIOS3: "fre", lanName: "Français" },
  { lan: "in_id", lanIOS3: "ind", lanName: "Indonesia" },
  { lan: "pt",    lanIOS3: "por", lanName: "Português" },
  { lan: "ar",    lanIOS3: "ara", lanName: "عربي" },
  { lan: "ur",    lanIOS3: "urd", lanName: "اردو" },
  { lan: "bn",    lanIOS3: "ben", lanName: "বাংলা" },
  { lan: "pa",    lanIOS3: "pan", lanName: "ਪੰਜਾਬੀ" },
  { lan: "ha",    lanIOS3: "hau", lanName: "Hausa" },
  { lan: "sw",    lanIOS3: "swa", lanName: "Kiswahili" },
  { lan: "zh",    lanIOS3: "chi", lanName: "中文(简体)" },
  { lan: "ru",    lanIOS3: "rus", lanName: "Русский" }
];

/* ============================================
   ⚙️ CONFIG
   ============================================ */
const API_BASE = "https://test-acdn.aoneroom.com";
const DETAIL_BASE = "https://h5.aoneroom.com/detail/";

/* ============================================
   📊 STATE
   ============================================ */
const AppState = {
  user: null,
  currentCategory: "Trending",
  currentMovie: null,
  searchQuery: "",
  allMovies: [...TRENDING_MOVIES, ...HOLLYWOOD_MOVIES],
  filteredMovies: TRENDING_MOVIES
};

/* ============================================
   💾 STORAGE HELPERS
   ============================================ */
function loadUserFromStorage() {
  try {
    const raw = localStorage.getItem("blastflix_user");
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveUserToStorage(user) {
  try {
    if (user) localStorage.setItem("blastflix_user", JSON.stringify(user));
    else localStorage.removeItem("blastflix_user");
  } catch {}
}

/* ============================================
   🎥 VIDEO URL (demo HD legal)
   ============================================ */
function buildVideoUrl(movie) {
  const HD_DEMO = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  ];
  const idx = (String(movie.id || "0").length) % HD_DEMO.length;
  return HD_DEMO[idx];
}

/* ============================================
   📝 PARSE SUBTITLES
   ============================================ */
function parseSubtitles(subStr) {
  if (!subStr) return [];
  return subStr.split(",").map(s => s.trim()).filter(Boolean);
     }
