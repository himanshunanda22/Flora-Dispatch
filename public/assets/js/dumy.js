
/*DON'T REFER THIS*/
// // checkout.js

// function processPayment() {
//   alert("Payment processed successfully!");
//   window.location.href = "order-confirmation.html";
// }
// document.addEventListener('DOMContentLoaded', function () {
//   // Function to get query parameters from the URL
//   function getQueryParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
//   }

//   // Retrieve cart items information from the URL
//   const productName = getQueryParameter('productName');
//   const price = getQueryParameter('price');
//   const quantity = getQueryParameter('quantity');

//   // Display the cart items information (adjust the display as needed)
//   const cartItemsContainer = document.getElementById('cartItemsContainer');
//   const listItem = document.createElement('li');
//   listItem.textContent = `Product: ${productName}, Price: $${price}, Quantity: ${quantity}`;
//   cartItemsContainer.appendChild(listItem);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   function getQueryParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.getAll(name);
//   }

//   const productNames = getQueryParameter('productName');
//   const prices = getQueryParameter('price');
//   const quantities = getQueryParameter('quantity');

//   // Display the cart items information
//   const cartItemsContainer = document.getElementById('cartItemsContainer');

//   // Assuming productNames, prices, and quantities have the same length
//   for (let i = 0; i < productNames.length; i++) {
//     const cartItemRow = document.createElement('tr');

//     const itemNameCell = document.createElement('td');
//     itemNameCell.textContent = productNames[i];

//     const itemPriceCell = document.createElement('td');
//     itemPriceCell.textContent = `$${prices[i]}`;

//     const itemQuantityCell = document.createElement('td');
//     itemQuantityCell.textContent = quantities[i];

//     // You can customize the structure and styles as needed
//     cartItemRow.appendChild(itemNameCell);
//     cartItemRow.appendChild(itemPriceCell);
//     cartItemRow.appendChild(itemQuantityCell);

//     cartItemsContainer.appendChild(cartItemRow);
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   function getQueryParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.getAll(name);
//   }

//   const productNames = getQueryParameter('productName');
//   const prices = getQueryParameter('price');
//   const quantities = getQueryParameter('quantity');

//   // Display the cart items information
//   const cartItemsContainer = document.getElementById('cartItemsContainer');
//   const finalAmountContainer = document.getElementById('finalAmount');

//   let totalAmount = 0;

//   // Assuming productNames, prices, and quantities have the same length
//   for (let i = 0; i < productNames.length; i++) {
//     const cartItemRow = document.createElement('div');
//     cartItemRow.classList.add('cart-item');

//     const itemName = document.createElement('span');
//     itemName.textContent = productNames[i];

//     const itemPrice = document.createElement('span');
//     itemPrice.textContent = `$${prices[i]}`;

//     const itemQuantity = document.createElement('span');
//     itemQuantity.textContent = quantities[i];

//     const incrementButton = document.createElement('button');
//     incrementButton.textContent = '+';
//     incrementButton.addEventListener('click', () => updateQuantity(i, 1));

//     const decrementButton = document.createElement('button');
//     decrementButton.textContent = '-';
//     decrementButton.addEventListener('click', () => updateQuantity(i, -1));

//     cartItemRow.appendChild(itemName);
//     cartItemRow.appendChild(itemPrice);
//     cartItemRow.appendChild(itemQuantity);
//     cartItemRow.appendChild(incrementButton);
//     cartItemRow.appendChild(decrementButton);

//     cartItemsContainer.appendChild(cartItemRow);

//     // Update the total amount
//     totalAmount += parseFloat(prices[i]) * parseInt(quantities[i]);
//   }

//   // Display the final amount
//   finalAmountContainer.textContent = `Final Amount: $${totalAmount.toFixed(2)}`;

//   // Function to update the quantity of an item
//   function updateQuantity(index, change) {
//     const quantityElement = document.querySelectorAll('.cart-item span')[index + 2]; // index + 2 to get the quantity element
//     let newQuantity = parseInt(quantityElement.textContent) + change;

//     // Ensure the quantity is at least 1
//     newQuantity = Math.max(1, newQuantity);

//     // Update the quantity in the UI
//     quantityElement.textContent = newQuantity;

//     // Update the quantity in the query parameter
//     quantities[index] = newQuantity;

//     // Update the final amount
//     totalAmount += parseFloat(prices[index]) * change;
//     finalAmountContainer.textContent = `Final Amount: $${totalAmount.toFixed(2)}`;
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   function getQueryParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.getAll(name);
//   }

//   const productNames = getQueryParameter('productName');
//   const prices = getQueryParameter('price');
//   let quantities = getQueryParameter('quantity').map(Number); // Parse quantities as numbers

//   // Display the cart items information
//   const cartItemsContainer = document.getElementById('cartItemsContainer');
//   const finalAmountContainer = document.getElementById('finalAmount');

//   let totalAmount = 0;

//   // Arrays to store references
//   const quantityElements = [];
//   const incrementButtons = [];
//   const decrementButtons = [];

//   // Assuming productNames, prices, and quantities have the same length
//   for (let i = 0; i < productNames.length; i++) {
//     const cartItemRow = document.createElement('div');
//     cartItemRow.classList.add('cart-item');

//     // Labels for product, quantity, and price
//     const productLabel = createLabel('Product:');
//     const quantityLabel = createLabel('Quantity:');
//     const priceLabel = createLabel('Price:');

//     function createLabel(text) {
//       const label = document.createElement('label');
//       label.textContent = text;
//       label.style.fontWeight = 'bold'; // Add bold styling
//       return label;
//     }
//     createLabel('Product:');
    
//     const itemName = document.createElement('span');
//     itemName.textContent = productNames[i];

//     const itemPrice = document.createElement('span');
//     itemPrice.textContent = `$${prices[i]}`;

//     const itemQuantity = document.createElement('span');
//     itemQuantity.textContent = quantities[i];
//     quantityElements.push(itemQuantity);

//     const incrementButton = createQuantityButton('+', i);
//     const decrementButton = createQuantityButton('-', i);
//     incrementButtons.push(incrementButton);
//     decrementButtons.push(decrementButton);

//     cartItemRow.appendChild(productLabel);
//     cartItemRow.appendChild(itemName);
//     cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
//     cartItemRow.appendChild(quantityLabel);
//     cartItemRow.appendChild(itemQuantity);
//     cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
//     cartItemRow.appendChild(priceLabel);
//     cartItemRow.appendChild(itemPrice);
//     cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
//     cartItemRow.appendChild(incrementButton);
//     cartItemRow.appendChild(decrementButton);

//     cartItemsContainer.appendChild(cartItemRow);

//     // Update the total amount
//     totalAmount += parseFloat(prices[i]) * quantities[i];
//   }

//   // Display the final amount
//   updateFinalAmount();

//   // Function to create labels
//   function createLabel(text) {
//     const label = document.createElement('label');
//     label.textContent = text;
//     return label;
//   }

//   // Function to create quantity buttons
//   function createQuantityButton(text, index) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.addEventListener('click', () => updateQuantity(index, text));
//     return button;
//   }

//   // Function to update the quantity of an item
//   function updateQuantity(index, action) {
//     let newQuantity;

//     if (action === '+') {
//       newQuantity = quantities[index] + 1;
//     } else if (action === '-') {
//       newQuantity = Math.max(0, quantities[index] - 1);
//     }

//     // Update the quantity in the UI
//     quantityElements[index].textContent = newQuantity;

//     // Update the quantity in the array
//     quantities[index] = newQuantity;

//     // Update the final amount
//     totalAmount = calculateTotalAmount();
//     updateFinalAmount();

//     // Remove the item if the quantity becomes zero
//     if (newQuantity === 0) {
//       const cartItemRow = document.querySelectorAll('.cart-item')[index];
//       cartItemRow.remove();
//     }
//   }

//   // Function to update the final amount
//   function updateFinalAmount() {
//     totalAmount = Math.max(0, totalAmount); // Ensure final amount is at least 0
//     finalAmountContainer.textContent = `Final Amount: $${totalAmount.toFixed(2)}`;
//   }

//   // Function to calculate the total amount
//   function calculateTotalAmount() {
//     let total = 0;
//     for (let i = 0; i < productNames.length; i++) {
//       total += parseFloat(prices[i]) * quantities[i];
//     }
//     return total;
//   }
// });
// document.addEventListener('DOMContentLoaded', function () {
//   function getQueryParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.getAll(name);
//   }

//   const productNames = getQueryParameter('productName');
//   const prices = getQueryParameter('price');
//   let quantities = getQueryParameter('quantity').map(Number); // Parse quantities as numbers

//   // Display the cart items information
//   const cartItemsContainer = document.getElementById('cartItemsContainer');
//   const finalAmountContainer = document.getElementById('finalAmount');

//   let totalAmount = 0;

//   // Arrays to store references
//   const quantityElements = [];
//   const incrementButtons = [];
//   const decrementButtons = [];

//   // Assuming productNames, prices, and quantities have the same length
//   for (let i = 0; i < productNames.length; i++) {
//     // Check if quantity is zero, skip the item
//     if (quantities[i] === 0) {
//       continue;
//     }

//     const cartItemRow = document.createElement('div');
//     cartItemRow.classList.add('cart-item');

//     // Labels for product, quantity, and price
//     const productLabel = createLabel('Product:');
//     const quantityLabel = createLabel('Quantity:');
//     const priceLabel = createLabel('Price:');

//     function createLabel(text) {
//       const label = document.createElement('label');
//       label.textContent = text;
//       label.style.fontWeight = 'bold'; // Add bold styling
//       return label;
//     }

//     const itemName = document.createElement('span');
//     itemName.textContent = productNames[i];

//     const itemPrice = document.createElement('span');
//     itemPrice.textContent = `$${prices[i]}`;

//     const itemQuantity = document.createElement('span');
//     itemQuantity.textContent = quantities[i];
//     quantityElements.push(itemQuantity);

//     const incrementButton = createQuantityButton('+', i);
//     const decrementButton = createQuantityButton('-', i);
//     incrementButtons.push(incrementButton);
//     decrementButtons.push(decrementButton);

//     cartItemRow.appendChild(productLabel);
//     cartItemRow.appendChild(itemName);
//     cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
//     cartItemRow.appendChild(quantityLabel);
//     cartItemRow.appendChild(itemQuantity);
//     cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
//     cartItemRow.appendChild(priceLabel);
//     cartItemRow.appendChild(itemPrice);
//     cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
//     cartItemRow.appendChild(incrementButton);
//     cartItemRow.appendChild(decrementButton);

//     cartItemsContainer.appendChild(cartItemRow);

//     // Update the total amount
//     totalAmount += parseFloat(prices[i]) * quantities[i];
//   }

//   // Display the final amount
//   updateFinalAmount();

//   // Function to create labels
//   function createLabel(text) {
//     const label = document.createElement('label');
//     label.textContent = text;
//     return label;
//   }

//   // Function to create quantity buttons
//   function createQuantityButton(text, index) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.addEventListener('click', () => updateQuantity(index, text));
//     return button;
//   }

//   // Function to update the quantity of an item
//   function updateQuantity(index, action) {
//     let newQuantity;

//     if (action === '+') {
//       newQuantity = quantities[index] + 1;
//     } else if (action === '-') {
//       newQuantity = Math.max(0, quantities[index] - 1);
//     }

//     // Update the quantity in the UI
//     quantityElements[index].textContent = newQuantity;

//     // Update the quantity in the array
//     quantities[index] = newQuantity;

//     // Update the final amount
//     totalAmount = calculateTotalAmount();
//     updateFinalAmount();

//     // Check if all quantities are zero, hide the items and final amount
//     if (quantities.every(qty => qty === 0)) {
//       const emptyCartMessage = document.createElement('div');
//       emptyCartMessage.innerHTML = '<h3>Oops, looks like your cart is empty!</h3><img src="./assets/img/right_2.gif" alt="Empty Cart" style="width: 700px; height: 585px;">';
    
//       // Clear existing content and append the message
//       cartItemsContainer.innerHTML = '';
//       cartItemsContainer.appendChild(emptyCartMessage);
    
//       // Clear final amount container
//       finalAmountContainer.innerHTML = '';
//     } else {
//       // Your existing code for displaying cart items and final amount
//       cartItemsContainer.style.display = 'block';
//       finalAmountContainer.style.display = 'block';
//     }
//   }
  
//   // Function to update the final amount
//   function updateFinalAmount() {
//     totalAmount = Math.max(0, totalAmount); // Ensure final amount is at least 0
//     finalAmountContainer.textContent = `Final Amount: $${totalAmount.toFixed(2)}`;
//   }

//   // Function to calculate the total amount
//   function calculateTotalAmount() {
//     let total = 0;
//     for (let i = 0; i < productNames.length; i++) {
//       total += parseFloat(prices[i]) * quantities[i];
//     }
//     return total;
//   }
// });