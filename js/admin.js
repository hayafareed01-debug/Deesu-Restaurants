console.log("ADMIN JS LOADED");

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

/* AUTH CHECK */

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  loadOrders();

});

/* LOGOUT */

window.logout = async () => {

  await signOut(auth);

  window.location.href = "login.html";

};

const container =
document.getElementById("ordersContainer");

/* LOAD ORDERS */

async function loadOrders() {

  try {

    const snapshot =
    await getDocs(
      collection(db, "orders")
    );

    container.innerHTML = "";

    if (snapshot.empty) {

      container.innerHTML =
      "<h3>No Orders Found</h3>";

      return;
    }

    snapshot.forEach((docSnap) => {

      const order = docSnap.data();

      let itemsHTML = "";

      if (order.items) {

        order.items.forEach((item) => {

          itemsHTML += `
            <li>
              ${item.name}
              × ${item.quantity}
              (PKR ${item.price})
            </li>
          `;

        });

      }

      container.innerHTML += `

      <div class="order-card">

        <h2>
          ${order.customerName || "Customer"}
        </h2>

        <p>
          <strong>Phone:</strong>
          ${order.phone || "-"}
        </p>

        <p>
          <strong>Address:</strong>
          ${order.address || "-"}
        </p>

        <p>
          <strong>Total:</strong>
          PKR ${order.total || 0}
        </p>

        <p>
          <strong>Items:</strong>
        </p>

        <ul>
          ${itemsHTML}
        </ul>

        <p class="${
          order.status === "Completed"
          ? "completed"
          : "pending"
        }">

          Status:
          ${order.status || "Pending"}

        </p>

        <div style="margin-top:15px; display:flex; gap:10px;">

          <button
          onclick="completeOrder('${docSnap.id}')">

            Mark Complete

          </button>

          <button
          style="
          background:#dc3545;
          color:white;"
          onclick="deleteOrder('${docSnap.id}')">

            Delete

          </button>

        </div>

      </div>

      `;

    });

  }

  catch (error) {

    console.error("Load Orders Error:", error);

    container.innerHTML =
    "<h3>Error loading orders</h3>";

  }

}

/* COMPLETE ORDER */

window.completeOrder = async (id) => {

  try {

    await updateDoc(
      doc(db, "orders", id),
      {
        status: "Completed"
      }
    );

    loadOrders();

  }

  catch (error) {

    console.error(error);

  }

};

/* DELETE ORDER */

window.deleteOrder = async (id) => {

  const confirmDelete =
  confirm("Delete this order?");

  if (!confirmDelete) return;

  try {

    await deleteDoc(
      doc(db, "orders", id)
    );

    loadOrders();

  }

  catch (error) {

    console.error(error);

  }

};