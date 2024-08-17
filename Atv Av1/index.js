const addToCartButtons = document.getElementsByClassName("pedir")
for (var i = 0; addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart)
}