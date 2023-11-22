let cartItems = [];

function openCart() {
  document.getElementById("cartPanel").classList.add("open");
  displayCartItems();
}

function closeCart() {
  document.getElementById("cartPanel").classList.remove("open");
}

function addToCart(productName, price) {
  const existingItem = cartItems.find((item) => item.productName === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ productName, price, quantity: 1 });
  }

  displayCartItems();
  openCart();
}

function decrementFromCart(productName) {
  const existingItem = cartItems.find((item) => item.productName === productName);

  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      // If quantity is 1, remove the item from the cart
      cartItems = cartItems.filter((item) => item.productName !== productName);
    }

    displayCartItems();
  }
}

function displayCartItems() {
  const cartItemList = document.getElementById("cartItemList");
  cartItemList.innerHTML = "";

  cartItems.forEach((item) => {
    const listItem = document.createElement("li");

    const itemName = document.createElement("span");
    itemName.textContent = `${item.productName} - $${item.price}`;

    const quantity = document.createElement("span");
    quantity.textContent = ` x ${item.quantity}`;

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.addEventListener("click", () => addToCart(item.productName, item.price));

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.addEventListener("click", () => decrementFromCart(item.productName));

    listItem.appendChild(itemName);
    listItem.appendChild(quantity);
    listItem.appendChild(incrementButton);
    listItem.appendChild(decrementButton);

    cartItemList.appendChild(listItem);
  });
}


function proceedToCheckout() {
  const checkoutURL = `checkout.html?${cartItems.map(item => `productName=${encodeURIComponent(item.productName)}&price=${item.price}&quantity=${item.quantity}`).join('&')}`;
  window.location.href = checkoutURL;
}
