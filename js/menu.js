import { db } from "./firebase.js";

import {
    collection,
    addDoc
}
from
"https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

let cart = [];

const menuContainer =
document.getElementById("menuContainer");

const searchInput =
document.getElementById("searchInput");

/* DISPLAY MENU */

function displayMenu(items){

    menuContainer.innerHTML = "";

    let currentCategory = "";

    items.forEach((item,index)=>{

        if(currentCategory !== item.category){

            currentCategory = item.category;

            menuContainer.innerHTML += `

                <h2 class="category-title">
                    ${currentCategory}
                </h2>

            `;
        }

        menuContainer.innerHTML += `

            <div class="menu-card">

                <img
                src="${item.image}"
                alt="${item.name}"
                class="food-image">

                <div class="menu-content">

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                    <div class="price-row">

                        <span class="price">
                            PKR ${item.price}
                        </span>

                        <button
                        class="add-btn"
                        onclick="addToCart(${index})">

                            Add To Cart

                        </button>

                    </div>

                </div>

            </div>

        `;
    });

}

/* INITIAL LOAD */

displayMenu(menuItems);

/* SEARCH */

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    menuItems.filter(item =>

        item.name
        .toLowerCase()
        .includes(value)

    );

    displayMenu(filtered);

});

/* CATEGORY FILTER */

function filterCategory(category){

    if(category === "All"){

        displayMenu(menuItems);

        return;
    }

    const filtered =
    menuItems.filter(item =>

        item.category === category

    );

    displayMenu(filtered);

}

/* ADD TO CART */

function addToCart(index){

    const item =
    menuItems[index];

    const existing =
    cart.find(cartItem =>

        cartItem.name === item.name

    );

    if(existing){

        existing.quantity++;

    }
    else{

        cart.push({

            ...item,

            quantity:1

        });

    }

    updateCart();

}

/* UPDATE CART */

function updateCart(){

    const cartItems =
    document.getElementById("cartItems");

    const cartCount =
    document.getElementById("cartCount");

    const cartTotal =
    document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item,index)=>{

        total +=
        item.price *
        item.quantity;

        count +=
        item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <h4>${item.name}</h4>

                <p>
                    PKR ${item.price}
                </p>

                <p>

                    Quantity:

                    <button
                    onclick="decreaseQty(${index})">

                        -

                    </button>

                    ${item.quantity}

                    <button
                    onclick="increaseQty(${index})">

                        +

                    </button>

                </p>

            </div>

        `;

    });

    cartCount.textContent = count;
    cartTotal.textContent = total;

}

/* INCREASE */

function increaseQty(index){

    cart[index].quantity++;

    updateCart();

}

/* DECREASE */

function decreaseQty(index){

    cart[index].quantity--;

    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }

    updateCart();

}

/* TOGGLE CART */

function toggleCart(){

    document
    .getElementById("cartDrawer")
    .classList
    .toggle("active");

    document
    .getElementById("overlay")
    .classList
    .toggle("active");

}

/* SUCCESS POPUP */

function showSuccessPopup(){

    document
    .getElementById("successPopup")
    .classList
    .add("active");

}

function closePopup(){

    document
    .getElementById("successPopup")
    .classList
    .remove("active");

}

/* PLACE ORDER */

async function checkoutOrder(){

    if(cart.length === 0){

        alert("Your cart is empty.");
        return;

    }

    const customerName =
    document
    .getElementById("customerName")
    .value
    .trim();

    const phone =
    document
    .getElementById("customerPhone")
    .value
    .trim();

    const address =
    document
    .getElementById("customerAddress")
    .value
    .trim();

    if(
        !customerName ||
        !phone ||
        !address
    ){

        alert(
            "Please fill all customer details."
        );

        return;

    }

    let total = 0;

    cart.forEach(item=>{

        total +=
        item.price *
        item.quantity;

    });

    const checkoutBtn =
    document.querySelector(
        ".checkout-btn"
    );

    checkoutBtn.disabled = true;

    checkoutBtn.innerHTML =
    "Processing Order...";

    try{

        await addDoc(

            collection(
                db,
                "orders"
            ),

            {

                customerName,
                phone,
                address,

                items:cart,

                total,

                status:"Pending",

                createdAt:
                new Date()

            }

        );

        document
        .getElementById(
            "customerName"
        ).value = "";

        document
        .getElementById(
            "customerPhone"
        ).value = "";

        document
        .getElementById(
            "customerAddress"
        ).value = "";

        cart = [];

        updateCart();

        toggleCart();

        showSuccessPopup();

        checkoutBtn.disabled = false;

        checkoutBtn.innerHTML =
        "Place Order";

    }

    catch(error){

        console.error(error);

        alert(
            "Failed to place order."
        );

        checkoutBtn.disabled = false;

        checkoutBtn.innerHTML =
        "Place Order";

    }

}

/* GLOBAL FUNCTIONS */

window.addToCart =
addToCart;

window.filterCategory =
filterCategory;

window.toggleCart =
toggleCart;

window.increaseQty =
increaseQty;

window.decreaseQty =
decreaseQty;

window.checkoutOrder =
checkoutOrder;

window.closePopup =
closePopup;