
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

//  Firebase configuration
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

// Google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

// Submit buttons
const submit = document.getElementById('submitButton');
const submit2 = document.getElementById('googleButton');

// Google Sign-In
submit2.addEventListener("click", function(event){
  event.preventDefault();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // Store user information in localStorage
      localStorage.setItem('profilePic', user.photoURL || 'default.jpg');
      localStorage.setItem('displayName', user.displayName || 'N/A');
      localStorage.setItem('email', user.email || 'N/A');
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error('Error during sign-in:', error.code, error.message);
    });
});

// Manual Sign-Up
submit.addEventListener("click", function(event){
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, {
        displayName: name,
        photoURL: "default.jpg"
      });
    })
    .then(() => {
      // Store user information in localStorage
      localStorage.setItem('profilePic', 'default.jpg');
      localStorage.setItem('displayName', document.getElementById('name').value);
      localStorage.setItem('email', document.getElementById('email').value);
      alert("Creating Account...");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
