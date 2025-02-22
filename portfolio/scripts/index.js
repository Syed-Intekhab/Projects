// Following dot logic
const dot = document.querySelector('.js-cursor-dot');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    // Adjusting position to center the dot on the cursor
    dot.style.transform = `translate(${x - dot.offsetWidth / 2}px, ${y - dot.offsetHeight / 2}px)`;
});

// Logic to scale the dot
const imgEls = document.querySelectorAll(".home__blob");
const skillCardEls = document.querySelectorAll(".skill-card");
const navLinks = document.querySelectorAll(".nav-link");
const dotPencil = document.querySelector(".pencil");
const dotUser = document.querySelector(".user");
const dontShow = document.querySelector(".hideMe");

imgEls.forEach((imgEl) => {
    imgEl.addEventListener("mouseenter", () => { changeCursor(49, dotUser) });
    imgEl.addEventListener("mouseleave", () => { changeCursor(15, dotUser) });
});

skillCardEls.forEach((card) => {
    card.addEventListener("mouseenter", () => { changeCursor(49, dotPencil) });
    card.addEventListener("mouseleave", () => { changeCursor(15, dotPencil) });
});

navLinks.forEach((nav) => {
    nav.addEventListener("mouseenter", () => { changeCursor(0, dontShow); dot.style.opacity = 0; })
    nav.addEventListener("mouseleave", () => { changeCursor(15, dontShow); dot.style.opacity = 1; })
});

function changeCursor(size, ElObj){
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    ElObj.classList.toggle("hidden");
}