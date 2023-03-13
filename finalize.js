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

// testing
// Set up test URL with query parameter
const testURL = "http://example.com?return-date=2023-03-19";

// Create URLSearchParams object
const urlParamsTest = new URLSearchParams(new URL(testURL).search);

// Retrieve returnDate from URL parameters
const returnDateTest = urlParams.get("return-date");

// Check if returnDate matches expected value
if (returnDateTest === "2023-03-19") {
  console.log("Test passed!");
} else {
  console.error("Test failed - returnDate does not match expected value");
}
