const ACTIVE_KEY = "active";

// 헤더 고정
const header = document.querySelector("header");

const fixHeader = () => {
    if (scrollY > 38) {
        header.classList.add(ACTIVE_KEY);
    }
    if (scrollY < 38) {
        header.classList.remove(ACTIVE_KEY);
    }
}

window.addEventListener("scroll", fixHeader);


// 서브메뉴 열기
const mainmenuList = document.querySelectorAll(".nav___ul");
const submenuWrapper = document.querySelectorAll(".submenu___wrapper");
const submenuList = document.querySelectorAll(".submenu___list");
const overlay = document.querySelector(".overlay");

for (let i=0; i<mainmenuList.length; i++) {
    mainmenuList[i].addEventListener("mouseover", function() {
        mainmenuList[i].classList.toggle(ACTIVE_KEY);
        submenuWrapper[i].classList.toggle(ACTIVE_KEY);
    })
    mainmenuList[i].addEventListener("mouseout", function() {
        mainmenuList[i].classList.remove(ACTIVE_KEY);
        submenuWrapper[i].classList.remove(ACTIVE_KEY);
    })
}


// 검색 메뉴 열기
const searchbar = document.querySelector(".header___searchbar");
const searchIcon = document.querySelector(".header___search");
const searchUI = document.querySelector(".search___ui");
const searchCloseBtn = document.querySelector(".search___close");

const searchbarClicked = () => {
    searchUI.classList.add(ACTIVE_KEY);
    overlay.style.display = "block";
}

const searchClose = () => {
    searchUI.classList.remove(ACTIVE_KEY);
    overlay.style.display = "none";
}

searchbar.addEventListener("click", searchbarClicked);
searchIcon.addEventListener("click", searchbarClicked);
searchCloseBtn.addEventListener("click", searchClose);
overlay.addEventListener("click", searchClose);


// 사이드메뉴 열기
const sidemenu = document.querySelector(".sidemenu");
const menuIcon = document.querySelector(".header___menu");

const openMenu = () => {
    overlay.style.display = "block";
    sidemenu.style.right = "0";
    document.body.classList.add("stop-scrolling"); 
}

const closeMenu = () => {
    overlay.style.display = "none";
    sidemenu.style.right = "-320px";
    document.body.classList.remove("stop-scrolling"); 
}

menuIcon.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);