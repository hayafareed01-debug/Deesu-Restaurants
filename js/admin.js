console.log("ADMIN JS LOADED");

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const container = document.getElementById("ordersContainer");

/* LOGOUT */

window.logout = async () => {

  await signOut(auth);

  window.location.href = "login.html";

};

/* LOAD ORDERS */

async function loadOrders() {

  try {

    const snapshot = await getDocs(
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

        <p class="${
          order.status === "Completed"
          ? "completed"
          : "pending"
        }">

          Status:
          ${order.status || "Pending"}

        </p>

        <div class="action-buttons">

          <button
          onclick="completeOrder('${docSnap.id}')">

            Complete

          </button>

          <button
          class="delete-btn"
          onclick="deleteOrder('${docSnap.id}')">

            Delete

          </button>

        </div>

      </div>

      `;

    });

  }

  catch (error) {

    console.error(
      "LOAD ORDER ERROR:",
      error
    );

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
  confirm(
    "Delete this order?"
  );

  if (!confirmDelete)
  return;

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

/* AUTH CHECK */

onAuthStateChanged(
  auth,
  (user) => {

    if (!user) {

      window.location.href =
      "login.html";

      return;

    }

    loadOrders();

  }
);