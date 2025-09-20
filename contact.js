import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCL5BjMgWH5tH_aJUuV_Ok6RWit7OsOrp8",
  authDomain: "newproject-33abe.firebaseapp.com",
  databaseURL: "https://newproject-33abe-default-rtdb.firebaseio.com/",
  projectId: "newproject-33abe",
  storageBucket: "newproject-33abe.firebasestorage.app",
  messagingSenderId: "820098979741",
  appId: "1:820098979741:web:50c09d14227a7624d70174",
  measurementId: "G-HRNGPFV1W2"
};

if (typeof firebase !== "undefined" && firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    try {
      await db.collection("messages").add({
        name,
        email,
        message,
        timestamp: new Date()
      });

      alert("✅ Message sent successfully!");
      contactForm.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Something went wrong. Please try again.");
    }
  });
}
