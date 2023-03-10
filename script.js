const buttons = document.querySelectorAll(".availability-btn");
buttons.forEach((button) => {
  button.onclick = () => {
    window.location.href = "checkout.html";
  };
});
