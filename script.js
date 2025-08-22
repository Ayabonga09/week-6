// --- Dynamic Quote of the Day ---
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Experience is the name everyone gives to their mistakes.",
  "Make it work, make it right, make it fast."
];

window.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.getElementById("quote-box");
  if (quoteBox) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;
  }
});

// --- Contact Form Validation ---
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Message sent successfully!");
    contactForm.reset();
  });
}

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});

