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
const username = "Ayabonga09"; 
const projectsContainer = document.getElementById("projectsContainer");
const filterInput = document.getElementById("filterInput");

async function fetchProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    displayProjects(repos);

    // Filter functionality
    filterInput.addEventListener("input", () => {
      const searchTerm = filterInput.value.toLowerCase();
      const filtered = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm) ||
        (repo.language && repo.language.toLowerCase().includes(searchTerm))
      );
      displayProjects(filtered);
    });
  } catch (error) {
    console.error("Error fetching repos:", error);
  }
}

function displayProjects(repos) {
  projectsContainer.innerHTML = "";
  repos.forEach(repo => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description ? repo.description : "No description"}</p>
      ${repo.language ? `<span class="language-badge">${repo.language}</span>` : ""}
    `;

    projectsContainer.appendChild(card);
  });
}

fetchProjects();



