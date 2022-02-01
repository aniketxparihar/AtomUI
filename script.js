const hamburger = document.querySelector("#navbar");
const sidebar = document.querySelector("#sidebar");
let open = false;
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