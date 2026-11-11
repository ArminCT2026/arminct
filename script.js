document.querySelector(".tech-btn").addEventListener("click", function() {
    alert("به دنیای Armin CT خوش آمدی! 🚀");
});
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("fa-IR");
}

updateClock();

setInterval(updateClock, 1000);
function updateDate() {
    const today = new Date();

    document.getElementById("date").textContent =
        today.toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
}

updateDate();
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});
