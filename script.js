let total = 0;

function addToCart(item, price) {
    let cart = document.getElementById("cartItems");

    let li = document.createElement("li");
    li.textContent = item + " - ₹" + price + " ";

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";

    removeBtn.onclick = function () {
        cart.removeChild(li);
        total -= price;
        document.getElementById("total").textContent = "Total: ₹" + total;
    };

    li.appendChild(removeBtn);
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = "Total: ₹" + total;
}

function placeOrder() {
    if (total === 0) {
        alert("Cart is empty! Add items first.");
    } else {
        document.getElementById("message").textContent =
            "✅ Order Placed Successfully! Total: ₹" + total;

        document.getElementById("cartItems").innerHTML = "";
        document.getElementById("total").textContent = "Total: ₹0";
        total = 0;
    }
}