

window.addEventListener("scroll", function () {
    const btn = document.querySelector(".hero__btn");

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 200) {
        btn.classList.add("hide");
    } else {
        btn.classList.remove("hide");
    }
});