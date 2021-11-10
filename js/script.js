const ACTIVE_KEY = "active";

// 스크롤에 따른 헤더 고정
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
}

const searchClose = () => {
    searchUI.classList.remove(ACTIVE_KEY);
}

searchbar.addEventListener("click", searchbarClicked);
searchIcon.addEventListener("click", searchbarClicked);
searchCloseBtn.addEventListener("click", searchClose);