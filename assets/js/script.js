document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        if (window.location.href.includes(item.getAttribute("href"))) {
            item.classList.add("clicked");
        }
    });
});
