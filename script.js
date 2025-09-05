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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
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
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌞";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      toggleBtn.textContent = "🌞";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
});
// --- FILTER PROJECTS ---
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    projects.forEach(project => {
      if (category === "all" || project.dataset.category === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// --- FETCH GITHUB REPOS ---
const githubUsername = "Ayabonga09"; // 🔥 replace with your GitHub username
const reposContainer = document.getElementById("github-repos");

async function fetchRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repos = await response.json();

    reposContainer.innerHTML = ""; // clear existing content

    repos.forEach(repo => {
      const repoCard = document.createElement("div");
      repoCard.classList.add("project-card");
      repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      reposContainer.appendChild(repoCard);
    });
  } catch (error) {
    console.error("Error fetching repos:", error);
    reposContainer.innerHTML = "<p>⚠️ Could not load GitHub repos.</p>";
  }
}

fetchRepos();


