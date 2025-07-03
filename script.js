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
  "Leather Bag", "Casual Wallet", "Sport Cap", "Elegant Perfume", "Gold Watch",
  "Vintage Dress", "Silk Scarf", "Denim Jacket", "Sunglasses", "Sneakers",
  "Classic Belt", "Hoodie", "Handbag", "Bracelet", "Boots",
  "Floral Skirt", "Tote Bag", "Smartwatch", "Makeup Kit", "Backpack",
  "Crewneck Tee", "Earrings", "Card Holder", "Trench Coat"
];

// Sample prices (or you can generate intelligently)
const productPrices = [
  59.99, 19.99, 15.00, 42.50, 149.99,
  89.00, 25.00, 79.99, 35.00, 65.00,
  22.00, 50.00, 74.99, 18.99, 95.00,
  39.99, 45.00, 129.99, 34.99, 55.00,
  29.99, 12.99, 17.50, 99.00
];

for (let i = 1; i <= 24; i++) {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <img src="IMG/product${i}.png" alt="${productNames[i - 1]}" />
    <p class="desc">${productNames[i - 1]}</p>
    <p class="price">$${productPrices[i - 1].toFixed(2)}</p>
  `;
  catalogGrid.appendChild(item);
}
