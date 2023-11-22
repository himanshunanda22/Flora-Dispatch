async function fetchProducts(filterOptions) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products?temperature=${filterOptions.temperature}&humidity=${filterOptions.humidity}&soil=${filterOptions.soil}`
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

async function updateProductDisplay() {
  try {
    const temperature = document.getElementById("temperature").value;
    const humidity = document.getElementById("humidity").value;
    const soil = document.getElementById("soil").value;

    const filterOptions = { temperature, humidity, soil };
    const products = await fetchProducts(filterOptions);

    displayProducts("plants", products.plants);
    displayProducts("tools", products.tools);
    displayProducts("fertilizers", products.fertilizers);
  } catch (error) {
    console.error("Error updating product display:", error);
  }
}

document.addEventListener("DOMContentLoaded", updateProductDisplay);

function displayProducts(sectionId, products) {
  const section = document.getElementById(sectionId);
  section.innerHTML = "";

  products.slice(0, 6).forEach((product) => {
    const productDiv = document.createElement("div");

    const base64Image = arrayBufferToBase64(product.img.data);

    productDiv.innerHTML = `
        <div class="product__card">
          <p class="product__title">${product.name}</p>
          <p class="product__price">${product.price}</p>
          <div class="product__img-container">
            <img src="data:image/jpeg;base64,${base64Image}" alt="${product.name}" class="product__img"/>
          </div>
          <div class="product__button-container">
            <button class="button--flex product__button" onclick="addToCart('${product.name}', ${product.price})">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </div>
        </div>`;
    section.appendChild(productDiv);
  });
}

function arrayBufferToBase64(buffer) {
  const binary = new Uint8Array(buffer);
  return btoa(String.fromCharCode.apply(null, binary));
}

function updateProductCount(productName, countChange) {
  const countElement = document.getElementById(`${productName}-count`);
  let count = parseInt(countElement.innerText) + countChange;

  count = Math.max(count, 1);

  countElement.innerText = count;
}

function openCartPanel() {
  document.getElementById("cartPanel").style.width = "250px";
  updateCartPanel();
}

function closeCartPanel() {
  document.getElementById("cartPanel").style.width = "0";
}

function addToCart(productName, productPrice) {
  updateCartPanel();

  openCartPanel();
}

function updateCartPanel() {
  const cartItemList = document.getElementById("cartItemList");

  const cart = getCart();
  cartItemList.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} - Quantity: ${item.quantity}`;
    cartItemList.appendChild(cartItem);
  });
}

function goBack() {
  window.history.back();
}
