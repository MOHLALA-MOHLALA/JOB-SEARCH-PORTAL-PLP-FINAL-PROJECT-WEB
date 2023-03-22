import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

  const firebaseConfig = {

    apiKey: "AIzaSyC7yxi_1JA2CctJBzk__akQ8gVl8rDNjHw",

    authDomain: "job-search-portal-a6d04.firebaseapp.com",

    projectId: "job-search-portal-a6d04",

    storageBucket: "job-search-portal-a6d04.appspot.com",

    messagingSenderId: "291393264681",

    appId: "1:291393264681:web:1bc990d391fa991713d038",

    measurementId: "G-QME28CL7XP"

  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
