// menu

const openMenuBtn = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeMenuBtn = document.querySelector(".menu__close"),
    menuOverlay = document.querySelector(".menu__overlay");

openMenuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

menuOverlay.addEventListener("click", () => {
    menu.classList.remove("active");
});

// ratings

const ratingItems = document.querySelectorAll('.rating-item');
ratingItems.forEach(item => {
    const itemPercent = item.querySelector('.rating-item__percent').textContent.replace(/\D/g, '');

    if (itemPercent > 0 && itemPercent <= 100) {
        item.querySelector('.rating-item__scale-line').style.width = `${itemPercent}%`;
    }
});