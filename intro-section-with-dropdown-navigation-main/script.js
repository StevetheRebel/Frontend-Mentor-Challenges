// create a function that displays the dropdown menu
const featuresBtn = document.querySelector(".featureDropDown");
const companyBtn = document.querySelector(".companyDropDown");
const featureList = document.querySelector(".features");
const companyList = document.querySelector(".company");
const featureArrowUp = document.querySelector(".featureDropDown .arrow-up");
const companyArrowUp = document.querySelector(".companyDropDown .arrow-up");
const featureArrowDown = document.querySelector(".featureDropDown .arrow-down");
const companyArrowDown = document.querySelector(".companyDropDown .arrow-down");

const toggleCompanyList = () => {
  if (
    companyList.style.display === "none" ||
    companyList.style.display === "" 
  ) {
    companyList.style.display = "flex";
    featureList.style.display = "none"; // Hide feature list
    companyArrowDown.style.display = "none";
    companyArrowUp.style.display = "inline";
  } else {
    companyList.style.display = "none";
    companyArrowUp.style.display = "none";
    companyArrowDown.style.display = "inline";
  }
};

const toggleFeatureList = () => {
  if (
    featureList.style.display === "none" ||
    featureList.style.display === ""
  ) {
    featureList.style.display = "flex";
    companyList.style.display = "none"; // Hide company list
    featureArrowDown.style.display = "none";
    featureArrowUp.style.display = "inline";

  } else {
    featureList.style.display = "none";
    featureArrowUp.style.display = "none";
    featureArrowDown.style.display = "inline";

  }
};

companyBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleCompanyList();
});

featuresBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleFeatureList();
});

document.addEventListener("click", (event) => {
  if (
    !companyList.contains(event.target) &&
    !companyBtn.contains(event.target)
  ) {
    companyList.style.display = "none";
    featureArrowUp.style.display = "none";
    featureArrowDown.style.display = "inline";
  }
  if (
    !featureList.contains(event.target) &&
    !featuresBtn.contains(event.target)
  ) {
    featureList.style.display = "none";
    companyArrowUp.style.display = "none";
    companyArrowDown.style.display = "inline";
  }
});

companyList.addEventListener("click", (event) => {
  event.stopPropagation();
});

featureList.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Toggling the menu image
const menuList = document.querySelectorAll(".menu");
const menuCtn = document.querySelector(".menus");

menuCtn.addEventListener("click", () => {
  menuList.forEach((menu) => {
    menu.classList.toggle("active");
  });
  mobileNavDisplay()
});


function mobileNavDisplay () {
  const mobileMenu = document.querySelector('.nav-ctn')
  const menuClose = document.getElementById('close-menu')
  const darkBackground = document.querySelector('.dark')

  if (menuClose.classList.contains('active')) {
    mobileMenu.style.display = 'block'
    darkBackground.style.display = 'block'
  } else {
    mobileMenu.style.display = 'none'
    darkBackground.style.display = 'none'
  }
}

