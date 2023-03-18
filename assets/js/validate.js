// Get form elements
const emailInput = document.getElementById("form2Example1");
const passwordInput = document.getElementById("form2Example2");
const rememberMeCheckbox = document.getElementById("form2Example31");
const signInButton = document.querySelector(".btn-primary");

// Add event listener to the sign-in button
signInButton.addEventListener("click", function () {
  // Get the values of the email and password inputs
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the email and password inputs are not empty
  if (email === "" || password === "") {
    alert("Please enter your email and password.");
    return;
  }

  // Check if the email is valid
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Check if the password is valid
  if (!isValidPassword(password)) {
    alert("Please enter a password with at least 8 characters.");
    return;
  }

  // If the form is valid, redirect to the appropriate page
  if (isLoginValid(email, password)) {
    // If the "Remember me" checkbox is checked, set a cookie
    if (rememberMeCheckbox.checked) {
      setCookie("email", email, 7);
    }
    window.location.href = "profile.html";
  } else {
    window.location.href = "register.html";
  }
});

// Function to check if an email is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to check if a password is valid
function isValidPassword(password) {
  return password.length >= 8;
}

// Function to check if the login is valid (you can replace this with your own server-side validation code)
function isLoginValid(email, password) {
  // For this sample code, we'll assume that the email "test@example.com" and password "password123" are valid
  return email === "test@example.com" && password === "password123";
}

// Function to set a cookie (you can replace this with your own cookie-setting code)
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
