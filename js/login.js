import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

window.login = async ()=>{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

window.location.href =
"admin.html";

}
catch(error){

alert("Invalid login");

}

};