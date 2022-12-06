let btn = document.querySelector(".btn");
let Accordion = document.querySelector(".Accordion");
let panel = document.querySelector(".panel");

let i;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

btn.addEventListener("click", (e) => {
    // e.preventDefault();
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
});

