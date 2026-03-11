function renderCart() {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById('carts-container');
    cartList.innerHTML = "";
    carts.forEach((item) => {
        const cartItem = document.createElement("div"); 
        cartItem.className = "cart";
        cartItem.innerHTML = `
            <span class="cartImage"><img src="${item.image}" alt="${item.name}"></span>
            <p id="cartProductName"> ${item.name}</p>
            <p id="quantity">${item.quantity}</p>
            <p id="cartTotalPrice">$${item.price.toFixed(2)}</p>
            <span class="increamtspan">
                <button class="minus" data-id="${item.id}">-</button>
                <p id="quantity">${item.quantity}</p>
                <button class="plus" data-id="${item.id}">+</button>
            </span>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        cartList.appendChild(cartItem);
    } 
    );
}

renderCart();

function setCartValue() {
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const totalcarts = carts.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById("cartlength");
  cartCountElement.innerHTML = totalcarts;
}

setCartValue();

function totalCartPrice() {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const totalPrice = carts.reduce((total, item) => total + item.price, 0);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    console.log(totalPrice);
}

totalCartPrice();

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart = cart.filter((item) => item.id !== parseInt(event.target.getAttribute("data-id")));
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`Product removed from cart!`);
            setCartValue();
            renderCart();
            totalCartPrice();
    }
    
    if (event.target.classList.contains("plus")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = cart.find((item) => item.id == parseInt(event.target.getAttribute("data-id")));
        if (product) {
            product.quantity += 1;
            product.price = product.quantity * product.price / (product.quantity - 1);  
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} quantity updated in cart!`);
            renderCart();
            setCartValue();
            totalCartPrice();
        }
    }

    if (event.target.classList.contains("minus")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = cart.find((item) => item.id == parseInt(event.target.getAttribute("data-id")));
        if (product && product.quantity > 1) {
            product.quantity -= 1;
            product.price = product.quantity * product.price / (product.quantity + 1);  
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} quantity updated in cart!`);
            renderCart();
            setCartValue();
            totalCartPrice();
        } else if (product && product.quantity === 1) {
            cart = cart.filter((item) => item.id !== product.id);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} removed from cart!`);
            setCartValue();
            renderCart();
            setCartValue();
            totalCartPrice();
        }
    }

}); 

const checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", () => {
    const cart = localStorage.setItem("cart", JSON.stringify([]));
    alert("Thank you for your purchase!");
    setCartValue();
    renderCart();
    setCartValue();
    totalCartPrice();
});