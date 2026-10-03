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

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

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

/* FILTER CATEGORY */

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
        item.price * item.quantity;

        count += item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <h4>
                    ${item.name}
                </h4>

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

/* CART DRAWER */

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

/* WHATSAPP CHECKOUT */

function checkoutWhatsApp(){

    if(cart.length === 0){

        alert(
            "Your cart is empty."
        );

        return;
    }

    let message =
    "Hello FARNAJ Cuisine,%0A%0A";

    message +=
    "I would like to order:%0A%0A";

    let total = 0;

    cart.forEach(item=>{

        message +=

        `${item.name}
        x${item.quantity}
        - PKR ${item.price * item.quantity}%0A`;

        total +=
        item.price *
        item.quantity;
    });

    message +=

    `%0A--------------------%0A`;

    message +=

    `Total:
    PKR ${total}%0A%0A`;

    message +=
    "Please confirm my order.";

    const whatsappURL =

    `https://wa.me/923455276276?text=${message}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}