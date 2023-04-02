import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// firebase key
  const firebaseConfig = {

    apiKey: "AIzaSyCaMBLooSI9RN_pjcuwM9nFANlyGfEk1wQ",
  
    authDomain: "job-search-portal-4ebc8.firebaseapp.com",
  
    projectId: "job-search-portal-4ebc8",
  
    storageBucket: "job-search-portal-4ebc8.appspot.com",
  
    messagingSenderId: "58044242489",
  
    appId: "1:58044242489:web:e31d24607235bbf70d8be8",
  
    measurementId: "G-QSH4GSJ4M3"
  
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth();

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
  var isVerified = true;
//emails verification
  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");// pop alert if emails are not the same
    isVerified = false;
  }
//password verification
  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");// pop alert if passwords are not the same
    isVerified = false;
  }
//veifiying if all feilds are filled
  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
        window.location = "./jobSeeker.html";//next page if all verified and acc created
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);// pop alert
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  // console.log(email);
  password = passwordInput.value;
  // console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      window.alert("Success! Welcome back!");
      window.location = "./jobSeeker.html";//next page if loged in succesfully

      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});



//nav bar

var navbarToggler = document.querySelector('.navbar-toggler');
var offcanvasCollapse = document.querySelector('.offcanvas-collapse');

navbarToggler.addEventListener('click', function() {
  offcanvasCollapse.classList.toggle('show');
});
