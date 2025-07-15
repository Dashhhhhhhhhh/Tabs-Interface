const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tabcontent");

tabButtons.forEach(button => {
    button.addEventListener("click", () => { 
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        tabContents.forEach(content => content.classList.remove("active"));
        const target = button.dataset.tab;
        document.querySelector(`#${target}`).classList.add("active");
    });
});