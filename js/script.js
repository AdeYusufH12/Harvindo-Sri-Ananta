// drop down burger menu
const menuBtn = document.getElementById("menuBtn")

if(menuBtn){
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");
    let isOpen = false;

    menuBtn.addEventListener("click", function () {
      if (!isOpen) {
        mobileMenu.classList.remove("max-h-0", "opacity-0");
        mobileMenu.classList.add("max-h-96", "opacity-100");
        menuIcon.textContent = "✕";
        isOpen = true;
      } else {
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        mobileMenu.classList.add("max-h-0", "opacity-0");
        menuIcon.textContent = "☰";
        isOpen = false;
      }
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        mobileMenu.classList.add("max-h-0", "opacity-0");
        menuIcon.textContent = "☰";
        isOpen = false;
      });
    });
  });
}

// Search Bar + Pagination
const searchInput = document.getElementById('searchInput');
const paginationEl = document.getElementById('pagination');
const notFound = document.getElementById('not-found');

if (searchInput && paginationEl && notFound) {
  const PER_PAGE = 5;
  let currentPage = 1;
  let filtered = [];

  function getAllItems() {
    return Array.from(document.querySelectorAll('.artikel-item'));
  }

  function getSearchText(item) {
    const judul = item.querySelector('.artikel-judul')?.textContent.toLowerCase() || '';
    const desc  = item.querySelector('.artikel-desc')?.textContent.toLowerCase() || '';
    return judul + ' ' + desc;
  }

  function render() {
    const items = getAllItems();
    items.forEach(item => item.style.display = 'none');

    if (filtered.length === 0) {
      notFound.classList.remove('hidden');
      paginationEl.innerHTML = '';
      return;
    }

    notFound.classList.add('hidden');
    const start = (currentPage - 1) * PER_PAGE;
    const end   = start + PER_PAGE;
    filtered.slice(start, end).forEach(item => item.style.display = 'block');
    renderPagination();
  }

  function renderPagination() {
    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    paginationEl.innerHTML = '';
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = [
        'w-10 h-10 rounded-lg text-sm font-semibold transition',
        i === currentPage
          ? 'bg-green-500 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600'
      ].join(' ');

      btn.addEventListener('click', () => {
        currentPage = i;
        render();
        document.getElementById('artikel-container')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      paginationEl.appendChild(btn);
    }
  }

  function applySearch() {
    const keyword = searchInput.value.toLowerCase().trim();
    const items = getAllItems();
    filtered = keyword
      ? items.filter(item => getSearchText(item).includes(keyword))
      : items;
    currentPage = 1;
    render();
  }

  filtered = getAllItems();
  render();

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applySearch, 250);
  });
}

// Function CopyLink
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.getElementById('copyText');
    btn.textContent = 'Tersalin!';
    setTimeout(() => btn.textContent = 'Salin Link', 2000);
  });
}

// Floating WA Button Tooltip
function showTooltip() {
  const tooltip = document.getElementById('wa-tooltip');
  if (!tooltip) return;
  tooltip.classList.remove('opacity-0', 'translate-x-4');
  tooltip.classList.add('opacity-100', 'translate-x-0');

  setTimeout(() => {
    tooltip.classList.remove('opacity-100', 'translate-x-0');
    tooltip.classList.add('opacity-0', 'translate-x-4');
  }, 3000);
}

const tooltipEl = document.getElementById('wa-tooltip');
if (tooltipEl) {
  setTimeout(showTooltip, 2000);
  setInterval(showTooltip, 2 * 60 * 1000);
}

// Buat Translate EN/ID
async function loadLang(lang) {
  try {
    const res = await fetch(`/lang/${lang}.json`);
    const data = await res.json();
 
    // Update semua elemen dengan data-key
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (data[key]) el.textContent = data[key];
    });
 
    // Update placeholder input/textarea dengan data-key-placeholder
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
      const key = el.dataset.keyPlaceholder;
      if (data[key]) el.placeholder = data[key];
    });
 
    // Simpan preferensi bahasa
    localStorage.setItem('lang', lang);
 
    // Update label tombol (kebalikan dari bahasa aktif)
    const label = lang === 'id' ? '🌐 EN' : '🌐 ID';
    const btnDesktop = document.getElementById('lang-btn');
    const btnMobile  = document.getElementById('lang-btn-mobile');
    if (btnDesktop) btnDesktop.textContent = label;
    if (btnMobile)  btnMobile.textContent  = label;
 
    // Update atribut lang di <html>
    document.documentElement.lang = lang;
 
  } catch (err) {
    console.error('Gagal load bahasa:', err);
  }
}
 
// Inisialisasi toggle — jalankan hanya jika tombol ada di halaman ini
const langBtnDesktop = document.getElementById('lang-btn');
const langBtnMobile  = document.getElementById('lang-btn-mobile');
 
function toggleLang() {
  const current = localStorage.getItem('lang') || 'id';
  loadLang(current === 'id' ? 'en' : 'id');
}
 
if (langBtnDesktop) langBtnDesktop.addEventListener('click', toggleLang);
if (langBtnMobile)  langBtnMobile.addEventListener('click', toggleLang);
 
// Load bahasa saat halaman dibuka
loadLang(localStorage.getItem('lang') || 'id');


// Galery Script untuk Produk Tractor
// Gallery Tractor
var galleryMain = document.getElementById('gallery-main');
if (galleryMain) {
  var galleryImages = [
    'assets/images/produk-tractor-1.jpeg',
    'assets/images/produk-tractor-2.jpeg',
    'assets/images/produk-tractor-3.jpeg',
    'assets/images/produk-tractor-4.jpeg'
  ];
  var currentIndex = 0;
  var slideshowTimer;

  window.gallerySwitch = function(index) {
    galleryMain.style.opacity = '0';
    setTimeout(function() {
      galleryMain.src = galleryImages[index];
      galleryMain.style.opacity = '1';
    }, 200);
    for (var i = 0; i < galleryImages.length; i++) {
      var thumb = document.getElementById('thumb-' + i);
      if (i === index) {
        thumb.classList.add('border-green-500', 'opacity-100');
        thumb.classList.remove('border-transparent', 'opacity-60');
      } else {
        thumb.classList.remove('border-green-500', 'opacity-100');
        thumb.classList.add('border-transparent', 'opacity-60');
      }
    }
    currentIndex = index;
    clearInterval(slideshowTimer);
    slideshowTimer = setInterval(autoSlide, 4000);
  };

  function autoSlide() {
    var next = (currentIndex + 1) % galleryImages.length;
    gallerySwitch(next);
  }

  slideshowTimer = setInterval(autoSlide, 4000);
}