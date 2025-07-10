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

const catalogGrid = document.querySelector(".catalog-grid");

// Sample product names
const productNames = [
  "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap",
  "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap",
  "Hilfiger Cap", "Hilfiger Cap", "Marc Jacob Camera Bag", "Marc Jacob Purple Small Tote", "Hilfiger Cap",
  "Hilfiger Cap", "Hilfiger Cap", "Hilfiger Cap", "Marc Jacob Camera Bag", "Hilfiger Cap",
  "Crewneck Tee", "Earrings", "Card Holder", "Trench Coat"
];

// Sample prices (or you can generate intelligently)
const productPrices = [
  1690.00, 1690.00, 1690.00, 1690.00, 1690.00,
  1690.00, 1690.00, 1690.00, 1690.00, 1690.00,
  1690.00, 1690.00, 8990.00, 7990.00, 95.00,
  39.99, 45.00, 129.99, 34.99, 55.00,
  29.99, 12.99, 17.50, 99.00
];

for (let i = 1; i <= 24; i++) {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <img src="img/product${i}.png" alt="${productNames[i - 1]}" />
    <p class="desc">${productNames[i - 1]}</p>
    <p class="price">Php ${productPrices[i - 1].toFixed(2)}</p>
  `;
  catalogGrid.appendChild(item);
}
