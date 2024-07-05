const navLinks = document.querySelectorAll("li");

function removeActive() {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    removeActive();
    navLink.classList.add("active");
    console.log(navLink.innerText)
  });
});

// menu icon toggle
const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const menu = document.getElementById('menu')

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  menu.style.display = 'flex'
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  menu.style.display = 'none'
});
