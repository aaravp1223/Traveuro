// Get the modal elements
var signupModal = document.getElementById("signupModal");
var loginModal = document.getElementById("loginModal");

// Get the button that opens the modal
var signupBtn = document.getElementById("signupButton");
var loginBtn = document.getElementById("loginButton");

// Get the <span> element that closes the modal
var closeSignup = document.getElementById("closeSignup");
var closeLogin = document.getElementById("closeLogin");

// When the user clicks the button, open the modal 
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSignup.onclick = function() {
    signupModal.style.display = "none";
}

closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Example submission handler
document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();
    // Handle the signup process
    alert("Signup form submitted");
    signupModal.style.display = "none";
}

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    // Handle the login process
    alert("Login form submitted");
    loginModal.style.display = "none";
}
