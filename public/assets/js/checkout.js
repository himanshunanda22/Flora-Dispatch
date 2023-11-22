document.addEventListener('DOMContentLoaded', function () {
  function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.getAll(name);
  }

  const productNames = getQueryParameter('productName');
  const prices = getQueryParameter('price');
  let quantities = getQueryParameter('quantity').map(Number); // Parse quantities as numbers

  // Display the cart items information
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const finalAmountContainer = document.getElementById('finalAmount');

  let totalAmount = 0;

  // Arrays to store references
  const quantityElements = [];
  const incrementButtons = [];
  const decrementButtons = [];

  // Assuming productNames, prices, and quantities have the same length
  for (let i = 0; i < productNames.length; i++) {
    // Check if quantity is zero, skip the item
    if (quantities[i] === 0) {
      continue;
    }

    const cartItemRow = document.createElement('div');
    cartItemRow.classList.add('cart-item');

    // Labels for product, quantity, and price
    const productLabel = createLabel('Product:');
    const quantityLabel = createLabel('Quantity:');
    const priceLabel = createLabel('Price:');

    function createLabel(text) {
      const label = document.createElement('label');
      label.textContent = text;
      label.style.fontWeight = 'bold'; // Add bold styling
      return label;
    }

    const itemName = document.createElement('span');
    itemName.textContent = productNames[i];

    const itemPrice = document.createElement('span');
    itemPrice.textContent = `$${prices[i]}`;

    const itemQuantity = document.createElement('span');
    itemQuantity.textContent = quantities[i];
    quantityElements.push(itemQuantity);

    const incrementButton = createQuantityButton('+', i);
    const decrementButton = createQuantityButton('-', i);
    incrementButtons.push(incrementButton);
    decrementButtons.push(decrementButton);

    cartItemRow.appendChild(productLabel);
    cartItemRow.appendChild(itemName);
    cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
    cartItemRow.appendChild(quantityLabel);
    cartItemRow.appendChild(itemQuantity);
    cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
    cartItemRow.appendChild(priceLabel);
    cartItemRow.appendChild(itemPrice);
    cartItemRow.appendChild(document.createElement('br')); // Add line break for spacing
    cartItemRow.appendChild(incrementButton);
    cartItemRow.appendChild(decrementButton);

    cartItemsContainer.appendChild(cartItemRow);

    // Update the total amount
    totalAmount += parseFloat(prices[i]) * quantities[i];
  }

  // Display the final amount
  updateFinalAmount();

  // Find the "Complete Purchase" button
  const completePurchaseButton = document.querySelector('#checkoutForm button[type="submit"]');

  // Add a click event listener to the "Complete Purchase" button
  completePurchaseButton.addEventListener('click', async function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Validate card number, expiry date, and CVV
    const cardNumberInput = document.getElementById('card-number');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');

    if (!isValidCardNumber(cardNumberInput.value)) {
      alert('Please enter a valid 16-digit card number.');
      return;
    }

    if (!isValidExpiryDate(expiryInput.value)) {
      alert('Please enter a valid expiry date in MM/YYYY format.');
      return;
    }

    if (!isValidCVV(cvvInput.value)) {
      alert('Please enter a valid 3-digit CVV.');
      return;
    }

    // Insert cart items into the database
    await insertCartItemsToDatabase(productNames, prices, quantities, totalAmount);

    // Add any additional logic for processing the purchase if needed

    // Redirect to map.html with order summary
    const orderSummaryUrl = `map.html?productName=${productNames.join(',')}&price=${prices.join(',')}&quantity=${quantities.join(',')}`;
    window.location.href = orderSummaryUrl;
  });

  // Function to create labels
  function createLabel(text) {
    const label = document.createElement('label');
    label.textContent = text;
    return label;
  }

  // Function to create quantity buttons
  function createQuantityButton(text, index) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => updateQuantity(index, text));
    return button;
  }

  // Function to update the quantity of an item
  function updateQuantity(index, action) {
    let newQuantity;

    if (action === '+') {
      newQuantity = quantities[index] + 1;
    } else if (action === '-') {
      newQuantity = Math.max(0, quantities[index] - 1);
    }

    // Update the quantity in the UI
    quantityElements[index].textContent = newQuantity;

    // Update the quantity in the array
    quantities[index] = newQuantity;

    // Update the final amount
    totalAmount = calculateTotalAmount();
    updateFinalAmount();

    // Check if all quantities are zero, hide the items and final amount
    if (quantities.every(qty => qty === 0)) {
      const emptyCartMessage = document.createElement('div');
      emptyCartMessage.innerHTML = '<h3>Oops, looks like your cart is empty!</h3><img src="./assets/img/right_2.gif" alt="Empty Cart" style="width: 700px; height: 585px;">';
    
      // Clear existing content and append the message
      cartItemsContainer.innerHTML = '';
      cartItemsContainer.appendChild(emptyCartMessage);
    
      // Clear final amount container
      finalAmountContainer.innerHTML = '';
    } else {
      // Your existing code for displaying cart items and final amount
      cartItemsContainer.style.display = 'block';
      finalAmountContainer.style.display = 'block';
    }
  }
  
  // Function to update the final amount
  function updateFinalAmount() {
    totalAmount = Math.max(0, totalAmount); // Ensure final amount is at least 0
    finalAmountContainer.textContent = `Final Amount: $${totalAmount.toFixed(2)}`;
  }

  // Function to calculate the total amount
  function calculateTotalAmount() {
    let total = 0;
    for (let i = 0; i < productNames.length; i++) {
      total += parseFloat(prices[i]) * quantities[i];
    }
    return total;
  }

  // Function to insert cart items into the database
  async function insertCartItemsToDatabase(productNames, prices, quantities) {
    try {
      // Fetch to insert cart items into the database
      await fetch("http://localhost:3000/api/insertCartItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productNames: productNames,
          prices: prices,
          quantities: quantities,
        }),
      });

      console.log("Cart items inserted into the database successfully");
    } catch (error) {
      console.error("Error inserting cart items into the database:", error);
      // Handle the error as needed
    }
  }

  // Function to validate card number
  function isValidCardNumber(cardNumber) {
    // Remove spaces and check for 16 digits
    const cleanedCardNumber = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cleanedCardNumber);
  }

  // Function to validate expiry date
  function isValidExpiryDate(expiryDate) {
    // Implement your validation logic here, e.g., check MM/YYYY format
    const dateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(expiryDate);
  }

  // Function to validate CVV
  function isValidCVV(cvv) {
    // Implement your validation logic here
    return /^\d{3}$/.test(cvv);
  }
});
