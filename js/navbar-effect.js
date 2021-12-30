const body = document.body;
const triggerMenu = document.querySelector(".page-header .trigger-main");
const nav = document.querySelector(".page-header navbar");
const menu = document.querySelector(".page-header .main-navbar");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }
  
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // Down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // Up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});