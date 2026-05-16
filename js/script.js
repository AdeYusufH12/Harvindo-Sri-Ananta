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