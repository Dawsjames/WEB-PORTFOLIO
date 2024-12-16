// Navigation Bar Dropdown:
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

navLinks.onclick = (event) => {
  event.stopPropagation();
};

document.onclick = (event) => {
  if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
    navLinks.classList.remove("active");
  }
};

//Contact Form
function openForm() {
  const contactContainer = document.getElementById("contact-container");
  contactContainer.style.display = "flex";
  setTimeout(() => {
    contactContainer.classList.add("show");
    contactContainer.classList.remove("hide");
    contactContainer.style.display = "flex";
  }, 10);
}

function closeForm() {
  const contactContainer = document.getElementById("contact-container");
  contactContainer.classList.add("hide");
  contactContainer.classList.remove("show");

  setTimeout(() => {
    contactContainer.style.display = "none";
  }, 300);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("form-email");

  function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!isEmailValid(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!form.checkValidity()) {
      alert("Please fill in all required fields.");
      return;
    }

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
          closeForm();
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  });
}

// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  const typewriterSpan = document.querySelector(".typewriter");
  const words = ["Web Developer", "Video Editor", "IT Graduate"];
  let wordIndex = 0;
  let charIndex = 0;

  const typeSpeed = 100; // Speed per character in milliseconds
  const eraseSpeed = 50; // Speed per character while erasing
  const delayBetweenWords = 2000; // Delay before typing the next word in milliseconds

  function type() {
    if (charIndex < words[wordIndex].length) {
      typewriterSpan.textContent += words[wordIndex].charAt(charIndex); // Add one character
      charIndex++;
      setTimeout(type, typeSpeed); // Delay for next character
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word
      setTimeout(type, typeSpeed); // Delay for next word
    }
  }

  type(); // Start the typing effect
});
