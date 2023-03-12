// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const returnDate = urlParams.get("return-date");
const imageSource = urlParams.get("image");

// Set the image source for the image element
const productImage = document.getElementById("product-image");
productImage.src = imageSource;

// Create the message text node
const messageNode = document.createTextNode(`Please return by: ${returnDate}`);

// Append the message text node to the message element
const messageElement = document.getElementById("message");
messageElement.appendChild(messageNode);
