// Dark/light mode toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});

// Project interaction
function showProjectMessage(projectName) {
    const projectMessage = document.getElementById("projectMessage");

    projectMessage.textContent =
        `You selected "${projectName}". More project details can be added here.`;
}

// Contact form validation and interaction
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.textContent = "Please complete all fields.";
        formMessage.style.color = "#dc2626";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;
    formMessage.style.color = "#15803d";

    contactForm.reset();
});
