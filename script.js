const hamburger = document.querySelector("#navbar");
const sidebar = document.querySelector("#sidebar");
const modalButton = document.querySelector(".modal__button");
const modalScreen = document.querySelector(".modal__screen");
const removeModal = document.querySelector(".remove__modal");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider__value");
const togglebutton = document.querySelector(".toggle__button");
let toggle = true;
let visible = false;
let open = false;

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
    e.preventDefault();
    console.log(open)
    if (open == false) {
        sidebar.style.left = "0rem";

    }
    if (open == true) {
        sidebar.style.left = "-30rem";

    }
    open = !open;
})

const modalOpen = () => {
    visible = !visible;
    console.log("Hi");
    if (visible === true) {
        modalScreen.style.display = "block";
    }
}

const modalClose = () => {
    visible = !visible;
    if (visible === false) {
        modalScreen.style.display = "none";
    }
}

sliderValue.innerHTML = slider.value;
function changeValue() {
sliderValue.innerHTML = slider.value;
}
    

    

