const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    window.location.href = function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
"login.html";

}
const products = [
  { name: "Paracetamol", price: 50 },
  { name: "Amoxicillin", price: 120 },
  { name: "Cough Syrup", price: 180 },
  { name: "Vitamin C", price: 90 },
  { name: "Pain Relief Gel", price: 250 }
];

const productContainer = document.getElementById("products");
const cartList = document.getElementById("cart");
const totalText = document.getElementById("total");

let cart = [];
let total = 0;

// Display products
products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: KES ${product.price}</p>
    <button>Add to Cart</button>
  `;

  div.querySelector("button").addEventListener("click", () => {
    addToCart(product);
  });

  productContainer.appendChild(div);
});

// Add to cart
function addToCart(product) {
  cart.push(product);
  total += product.price;

  const li = document.createElement("li");
  li.textContent = `${product.name} - KES ${product.price}`;
  cartList.appendChild(li);

  totalText.textContent = `Total: KES ${total}`;
}
