function toggleMenu() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show');
}

const text = "Triple A Boutique";
const titleElement = document.getElementById("hero-title");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    titleElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // typing speed in milliseconds
  }
}

// Start the animation when the page loads
window.onload = typeWriter;

