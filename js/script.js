// drop down burger menu
const menuBtn = document.getElementById("menuBtn")

if(menuBtn){
   // script menu disini
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

  // Auto close saat klik link
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

// Pagination
const items = document.querySelectorAll(".artikel-item")

if(items.length > 0){

const itemsPerPage = 3
const paginationContainer = document.getElementById("pagination")

const totalPages = Math.ceil(items.length / itemsPerPage)

function showPage(page, scroll=false){

let start = (page - 1) * itemsPerPage
let end = start + itemsPerPage

items.forEach((item,index)=>{
item.style.display = (index >= start && index < end) ? "flex" : "none"
})

document.querySelectorAll(".page-btn").forEach(btn=>{
btn.classList.remove("bg-green-500","text-white")
btn.classList.add("bg-gray-200")
})

const activeBtn = document.querySelector(`[data-page="${page}"]`)

if(activeBtn){
activeBtn.classList.remove("bg-gray-200")
activeBtn.classList.add("bg-green-500","text-white")
}

if(scroll){
const artikelSection = document.getElementById("artikel-list")
if(artikelSection){
artikelSection.scrollIntoView({behavior:"smooth"})
}
}

}

for(let i = 1; i <= totalPages; i++){

const btn = document.createElement("button")

btn.textContent = i
btn.dataset.page = i

btn.className =
"page-btn px-4 py-2 bg-gray-200 rounded hover:bg-green-400 hover:text-white transition"

btn.addEventListener("click",()=>{
showPage(i,true)
})

paginationContainer.appendChild(btn)

}

showPage(1)

}


// Menu Search Bar 
const PER_PAGE = 5;
  let currentPage = 1;
  let filtered = [];

  const searchInput = document.getElementById('searchInput');
  const paginationEl = document.getElementById('pagination');
  const notFound     = document.getElementById('not-found');

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

    // Sembunyiin semua dulu
    items.forEach(item => item.style.display = 'none');

    if (filtered.length === 0) {
      notFound.classList.remove('hidden');
      paginationEl.innerHTML = '';
      return;
    }

    notFound.classList.add('hidden');

    // Tampilkan artikel sesuai halaman aktif
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
    const items   = getAllItems();
    filtered = keyword
      ? items.filter(item => getSearchText(item).includes(keyword))
      : items;
    currentPage = 1;
    render();
  }

  // Init pertama kali
  filtered = getAllItems();
  render();

  // Search dengan debounce 250ms
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applySearch, 250);
  });

  // Function CopyLink
  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.getElementById('copyText');
      btn.textContent = 'Tersalin!';
      setTimeout(() => btn.textContent = 'Salin Link', 2000);
    });
  }