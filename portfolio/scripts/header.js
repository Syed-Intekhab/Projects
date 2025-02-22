const hamburgerEl = document.querySelector(".js-hamburger-container");
const navContainerEl = document.querySelector(".js-navigation-container");
const closehamEl = document.querySelector(".js-close-navigation-container");

// Add event listeners once
hamburgerEl.addEventListener("click", () => {
    navContainerEl.style.display = "flex";
    closehamEl.style.display = "flex";
    document.body.style.overflow = "hidden";
});

closehamEl.addEventListener("click", () => {
    navContainerEl.style.display = "none";
    closehamEl.style.display = "none";
    document.body.style.overflow = "auto";
});

// Function to check screen size and update visibility
function checkScreenSize() {
    let mediaQuery = window.matchMedia('(max-width: 540px)');

    if (mediaQuery.matches) {
        // Mobile view: Hide menu initially
        navContainerEl.style.display = "none";
        closehamEl.style.display = "none";
    } else {
        // Desktop view: Always show menu, hide close button
        navContainerEl.style.display = "flex";
        closehamEl.style.display = "none";
    }
}

// Listen for window resize
window.addEventListener("resize", checkScreenSize);

// Run once at start
checkScreenSize();