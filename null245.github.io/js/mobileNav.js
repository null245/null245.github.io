const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburegrIcon = document.getElementById("iconHamburger");
const closeicon = document.getElementById("iconClose");

let isOpen = false;

hamburgerBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if(isOpen) {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        hamburegrIcon.classList.add("hidden");
        closeicon.classList.remove("hidden");

        document.body.style.overflow = "hidden";
    } else {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full")

        hamburegrIcon.classList.remove("hidden");
        closeicon.classList.add("hidden");

        document.body.style.overflow = "";
    }
})