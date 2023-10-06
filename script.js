var thumbsSwiper = new Swiper(".thumbsSwiper", {
    spaceBetween: 10,

    slidesPerView: 3,

    breakpoints: {
        200: {
            slidesPerView: 2,
        },

        400: {
            slidesPerView: 3,
        }
    },
});


const swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 0,
    allowTouchMove: false,
    speed: 1000,

    thumbs: {
        swiper: thumbsSwiper,
    },
});

var explore = document.querySelectorAll(".explore");

var thumbs = document.querySelector(".thumbs");
var headers = document.querySelectorAll(".title");
var contents = document.querySelectorAll(".content");

var slideBtns = document.querySelectorAll(".slide-btn");
var closeBtns = document.querySelectorAll(".close-btn");

explore.forEach((el) => {
    el.addEventListener("click", function () {
        thumbs.classList.add("hide");
        headers.forEach((e) => {
            e.classList.add("hide");
        });
        el.classList.add("hide");

        document.querySelector(".swiper-slide-active").classList.add("hide");

        contents.forEach((e) => {
            e.classList.add("hide");
        })
    });
});


slideBtns.forEach(el => {
    el.addEventListener("click", function () {
        document.querySelector(".swiper-slide-active").classList.remove("hide");
        document.querySelector(".swiper-slide-active").classList.add("details");
    });
});

closeBtns.forEach(el => {
    el.addEventListener("click", function () {
        thumbs.classList.remove("hide");
        document.querySelector(".swiper-slide-active").classList.remove("details");
        contents.forEach(e => {
            e.classList.remove("hide");
        });
        headers.forEach(e => {
            e.classList.remove("hide");
        });
        explore.forEach(e => {
            e.classList.remove("hide");
        });
    });
});


