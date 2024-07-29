// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHij7fI2rV9smRLqDJuBHRO9GxUYVLwwo",
  authDomain: "volunato.firebaseapp.com",
  projectId: "volunato",
  storageBucket: "volunato.appspot.com",
  messagingSenderId: "1079622129641",
  appId: "1:1079622129641:web:d2aa9baae23feb960b9d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit buttons
const submit = document.getElementById('loginButton');
const submit2 = document.getElementById('googleButton2');

// Google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

// Email and password login
submit.addEventListener("click", function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Logging In...");
      window.location.href = "home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Google login
submit2.addEventListener("click", function(event) {
  event.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // Store user information in localStorage
      localStorage.setItem('profilePic', user.photoURL || 'default.jpg');

      // Check if user email is already registered
      fetchSignInMethodsForEmail(auth, user.email)
        .then((signInMethods) => {
          if (signInMethods.length >= 0) {
            // Email is registered
            window.location.href = "home.html";
          } else {
            // Email is not registered, handle accordingly
            console.error('Email is not registered.');
            alert('Email is not registered. Please sign up first.');
            // Sign out the user
            auth.signOut();
          }
        })
        .catch((error) => {
          console.error('Error checking sign-in methods:', error);
          alert('An error occurred. Please try again.');
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during sign-in:', errorCode, errorMessage);
    });
});
