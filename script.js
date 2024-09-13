const mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    autoplay: true,
    speed: 1000,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const header = document.querySelector(".category-navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        header.classList.add("on-scroll");
        header.style.position = "fixed";
        header.style.top = "0";
    } else {
        header.classList.remove("on-scroll");
        header.style.removeProperty("position");
        header.style.removeProperty("top");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const rankingactive = document.querySelectorAll(".ranking-category span");

    rankingactive[0].classList.add("active");

    rankingactive.forEach((item) => {
        item.addEventListener("click", () => {
            rankingactive.forEach((span) => {
                span.classList.remove("active");
            });
            item.classList.add("active");
        });
    });

    const subbnrfont = document.querySelectorAll(".subbanner-option span");
    subbnrfont[0].classList.add("font-active");

    subbnrfont.forEach((item) => {
        item.addEventListener("click", () => {
            subbnrfont.forEach((span) => {
                span.classList.remove("font-active");
            });
            item.classList.add("font-active");
        });
    });
});

document.getElementById("rankbtn").addEventListener("click", function () {
    const rankweekly = document.querySelector(".weeklytext");
    const rankseasonal = document.querySelector(".seasonaltext");
    const gridweek = document.querySelector(".weekly-hot-grid-container");
    const gridseason = document.querySelector(".weekly-hot-grid-container2");

    if (rankweekly.classList.contains("show") && gridweek.classList.contains("grid-show")) {
        rankweekly.classList.remove("show");
        rankweekly.classList.add("hide");
        gridweek.classList.remove("grid-show");
        gridweek.classList.add("hide");

        rankseasonal.classList.remove("hide");
        rankseasonal.classList.add("show");
        gridseason.classList.remove("hide");
        gridseason.classList.add("grid-show");
    } else {
        rankweekly.classList.remove("hide");
        rankweekly.classList.add("show");
        gridweek.classList.remove("hide");
        gridweek.classList.add("grid-show");

        rankseasonal.classList.remove("show");
        rankseasonal.classList.add("hide");
        gridseason.classList.remove("grid-show");
        gridseason.classList.add("hide");
    }
});

window.open("popup.html", "popup", "width = 750, height = 785, left = 0, top = 0, scrollbars=no");

ScrollOut();
