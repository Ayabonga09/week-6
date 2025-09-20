
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
}

const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour >= 5 && hour < 12) greeting = "Good Morning 🌅";
  else if (hour >= 12 && hour < 18) greeting = "Good Afternoon ☀️";
  else greeting = "Good Evening 🌙";
  greetingEl.textContent = greeting;
}


const username = "Ayabonga09";
const projectsContainer = document.getElementById("projectsContainer");
const filterInput = document.getElementById("filterInput");

async function fetchProjects() {
  if (!projectsContainer) return; 
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    displayProjects(repos);

    if (filterInput) {
      filterInput.addEventListener("input", () => {
        const searchTerm = filterInput.value.toLowerCase();
        const filtered = repos.filter(repo =>
          repo.name.toLowerCase().includes(searchTerm) ||
          (repo.language && repo.language.toLowerCase().includes(searchTerm))
        );
        displayProjects(filtered);
      });
    }
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
      <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
      <p>${repo.description ? repo.description : "No description"}</p>
      ${repo.language ? `<span class="language-badge">${repo.language}</span>` : ""}
    `;
    projectsContainer.appendChild(card);
  });
}

fetchProjects();





