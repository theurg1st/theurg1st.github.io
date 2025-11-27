
if (!location.hash) {
    location.hash = "#about";
}


function updateNavigation() {
    const current = location.hash;

    document.querySelectorAll("nav li a").forEach(link => {
        const target = link.getAttribute("href");
        link.classList.toggle("selected", target === current);
    });

    setTimeout(() => window.scrollTo(0, 0), 0);
}


window.addEventListener("load", updateNavigation);
window.addEventListener("hashchange", updateNavigation);
