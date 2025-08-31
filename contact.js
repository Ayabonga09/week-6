// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDkGFA3no9bsuQrt5xQc_cyXS5_3Ybmbss",
  authDomain: "ayabonga-portfolio.firebaseapp.com",
  databaseURL: "https://ayabonga-portfolio-default-rtdb.firebaseio.com",
  projectId: "ayabonga-portfolio",
  storageBucket: "ayabonga-portfolio.appspot.com",
  messagingSenderId: "1038329172569",
  appId: "1:1038329172569:web:0e243651ec031b155c9748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    push(ref(database, "contacts"), {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    }).then(() => {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }).catch((error) => {
      alert("Error sending message. Please try again.");
      console.error(error);
    });
  } else {
    alert("Please fill in all fields.");
  }
});
