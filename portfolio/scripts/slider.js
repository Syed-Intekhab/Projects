// Slider
const slidePrevEl = document.querySelector(".js-slide-prev");
const slideNextEl = document.querySelector(".js-slide-next");
const slideCardEls = document.querySelectorAll(".js-slide-card");
let translateX = 0;
let slidesCount = slideCardEls.length;
let maxTranslate = 100 * (slidesCount - 1);

slidePrevEl.addEventListener("click", () => {
    if(translateX > 0){
        translateX -= 100;
        transformSlides();
    }
});

slideNextEl.addEventListener("click", () => {
    if(translateX < maxTranslate){
        translateX += 100;
        transformSlides();
    }
});

function transformSlides() {
    slideCardEls.forEach((slide) => {
        slide.style.transform = `translateX(-${translateX}%)`;
    });
}