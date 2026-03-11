const products = JSON.parse(localStorage.getItem("products")) || [];
// const cart = JSON.parse(localStorage.getItem("cart")) || [];
function renderProducts() {
  const productList = document.getElementsByClassName("cardContainer")[0];
//   productList.innerHTML = "";
    products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "card";
    productCard.innerHTML = `
        <span class="imgcontainer"><img src="${product.image}" alt="${product.name}"></span>
        <h3 id="productName">${product.name}</h3>
        <p id="productPrice">$${product.price.toFixed(2)}</p>
        <button class="addToCart" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
}

renderProducts();

function setCartValue() {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(carts);
    const totalcarts = carts.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById("cartlength");
    cartCountElement.innerHTML = totalcarts;
}

setCartValue();


document.addEventListener("click", (event) => {
  if (event.target.classList.contains("addToCart")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);
    if (product) {
        product.quantity = 1; // Add quantity property to the product
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isProductInCart = cart.find((item) => item.id === productId);
        if (isProductInCart) {
            isProductInCart.quantity += 1; // Increment quantity if product is already in cart
            isProductInCart.price = isProductInCart.quantity * product.price; // Update price based on quantity
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} quantity updated in cart!`);
            setCartValue();
            return;
        }
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
    setCartValue();
    }
});