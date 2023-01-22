const modeBtn = document.querySelector(".header__dark-mode");
const modeFromLocal = localStorage.getItem("mode")
    ? localStorage.getItem("mode")
    : null;

if (modeFromLocal) {
    document.body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeFromLocal
        ? localStorage.setItem("mode", "")
        : localStorage.setItem("mode", "dark");
});
