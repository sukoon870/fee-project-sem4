const navBar = document.querySelector("nav");
const navOpener = document.querySelector("nav > button");
const experienceDivs = document.querySelectorAll(".experience > div");
const formMain = document.querySelector("#contact form");
if (!navOpener || !navBar || !experienceDivs.length) {
    throw new Error("Something went wrong with HTML.");
}

const scrollData = {
    lastScrollY: 0,
};

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100 && window.scrollY > scrollData.lastScrollY) {
        navBar.classList.add("hide-up");
    } else {
        navBar.classList.remove("hide-up");
    }
    scrollData.lastScrollY = window.scrollY;
});
navOpener.addEventListener("click", () => {
    navBar.classList.toggle("closed");
});
experienceDivs.forEach((div) => {
    const field = div.querySelector(".field");
    const bar = div.querySelector(".bar");
    if (!field || !bar) {
        console.error(
            "Something went wrong with HTML. field or bar is missing in experience."
        );
    }
    const len = field.getAttribute("data-len") || 50;
    field.innerText = `${field.textContent} (${len}%)`;
    bar.style.setProperty("--len", `${len}%`);
});

formMain.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formMain);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
    window.alert("Form submitted");
    formMain.reset();
});
