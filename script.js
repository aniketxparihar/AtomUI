const hamburger = document.querySelector("#navbar");
const sidebar = document.querySelector("#sidebar");
const modalButton = document.querySelector(".modal__button");
const modalScreen = document.querySelector(".modal__screen");
const removeModal = document.querySelector(".remove__modal");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider__value");
const togglebutton = document.querySelector(".toggle__button");
const hamburgerButton = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");
let hamburgerToggle = false;
let toggle = true;
let open = false;
const modalOpen = () => {
    modalScreen.style.display = "block"
}

const modalClose = () => {
    modalScreen.style.display = "none";
}
const badgeToggle = () => {
    toggle = !toggle;
    if (toggle == true) {
        document.querySelector(".toggle").style.display = "flex";
    }
    if (toggle == false) {
        document.querySelector(".toggle").style.display = "none";
    }
}

hamburger.addEventListener("click", (e) => {
    if (open == false) {
        sidebar.style.left = "0rem";

    }
    if (open == true) {
        sidebar.style.left = "-30rem";

    }
    open = !open;
})
hamburgerButton.addEventListener('click', (e) => {
    if (hamburgerToggle === false) { drawer.style.right = "0rem"; hamburgerToggle = !hamburgerToggle; console.log(hamburgerToggle) }
    else { drawer.style.right = "-100rem"; hamburgerToggle = !hamburgerToggle; console.log(hamburgerToggle) }
})

sliderValue.innerHTML = slider.value;
function changeValue() {
    sliderValue.innerHTML = slider.value;
}




