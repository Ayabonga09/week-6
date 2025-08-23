// -------- Dynamic Greeting --------
function setGreeting() {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "Welcome to my portfolio!";

  if (hour < 12) {
    message = "Good Morning ☀️, welcome to my portfolio!";
  } else if (hour < 18) {
    message = "Good Afternoon 🌤️, welcome to my portfolio!";
  } else {
    message = "Good Evening 🌙, welcome to my portfolio!";
  }

  if (greetingEl) greetingEl.textContent = message;
}
setGreeting();

// -------- Show/Hide Quote --------
document.addEventListener("DOMContentLoaded", () => {
  const quoteBtn = document.getElementById("quote-btn");
  const quoteText = document.getElementById("quote-text");

  if (quoteBtn && quoteText) {
    quoteBtn.addEventListener("click", () => {
      if (quoteText.style.display === "none") {
        quoteText.style.display = "block";
        quoteBtn.textContent = "Hide Quote";
      } else {
        quoteText.style.display = "none";
        quoteBtn.textContent = "Show Quote";
      }
    });
  }
});

// -------- Contact Form Validation --------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stop form from sending
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      alert("✅ Thank you! Your message has been sent (demo only).");
      form.reset();
    });
  }
});
