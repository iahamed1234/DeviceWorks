// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const returnDate = urlParams.get("return-date");
const imageSource = urlParams.get("image");

// Set the image source for the image element
const productImage = document.getElementById("product-image");
productImage.src = imageSource;

function finalize() {
  const returnDate = document.getElementById("return-date").value;
  const imageSource = document.getElementById("product-image").src;
  const name = document.getElementById("name").value;

  const url = `finalize.html?return-date=${returnDate}&image=${imageSource}&name=${name}`;
  window.location.href = url;
}
