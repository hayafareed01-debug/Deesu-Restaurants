import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyA7xaiB4RRaK76Rt6fdAGrO1zWSzeYh1R4",

  authDomain: "farnaj-cuisine.firebaseapp.com",

  projectId: "farnaj-cuisine",

  storageBucket: "farnaj-cuisine.firebasestorage.app",

  messagingSenderId: "269916986489",

  appId: "1:269916986489:web:6dc510f27ea3ef36b608a8",

  measurementId: "G-P1YFND4WEX"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };