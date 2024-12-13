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

// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  const typewriterSpan = document.querySelector(".typewriter");
  const words = ["Web Developer","Video Editor","IT Graduate"]
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
    }
    else{
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if(charIndex > 0){
      typewriterSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } 
    else{
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word
      setTimeout(type, typeSpeed); // Delay for next word
    }
  }

  type(); // Start the typing effect
});