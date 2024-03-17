// Simulated user credentials (replace this with your actual user data)
var storedUsername = '';
var storedPassword = '';



// Check if the user is already logged in from session storage
document.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = sessionStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    document.getElementById('login-status').textContent = 'User';
    updateNavbar();
    hideLoginForm();
    hideUserForm();
    showProfileForm();
  } else{
    hideProfileForm();
  }
});




// Function to show the login form
function showLoginForm() {
  document.getElementById('login-form').style.display = 'block';
}

// Function to hide the login form
function hideLoginForm() {
  document.getElementById('login-form').style.display = 'none';
}

// Function to show the register form
function showRegisterForm() {
  document.getElementById('register-form').style.display = 'block';
}

// Function to hide the register form
function hideRegisterForm() {
  document.getElementById('register-form').style.display = 'none';
}

// Function to show the register form
function showUserForm() {
  document.getElementById('user-form').style.display = 'block';
}

// Function to hide the register form
function hideUserForm() {
  document.getElementById('user-form').style.display = 'none';
}

// Function to show the profile form
function showProfileForm() {
  document.getElementById('profile-form').style.display = 'block';
}

// Function to hide the profile form
function hideProfileForm() {
  document.getElementById('profile-form').style.display = 'none';
}

// Simulated login function
function login() {
  var enteredUsername = document.getElementById('username').value;
  var enteredPassword = document.getElementById('password').value;

  if (enteredUsername === storedUsername && enteredPassword === storedPassword && $("#login-form").valid()) {
    // Successful login
    document.getElementById('login-status').textContent = 'User';
    updateNavbar();
    hideLoginForm();
    hideRegisterForm();
    hideUserForm();
    showProfileForm();


    // Store login state in session storage
    sessionStorage.setItem('isLoggedIn', 'true');
  } else {
    // Incorrect login
    alert('Incorrect username or password. Please try again.');
  }
}

// Simulated logout function
function logout() {
  // Assume successful logout for demonstration
  // You should handle the actual logout process and session management securely on the server.
  document.getElementById('login-status').textContent = 'Guest';
  updateNavbar();
  showUserForm();
  showLoginForm();
  hideProfileForm();

  // Remove login state from session storage
  sessionStorage.removeItem('isLoggedIn');
}

// Function to update the navbar based on the login status
function updateNavbar() {
  var loginStatus = document.getElementById('login-status');
  var cartLink = document.getElementById('cart-link');
  var logoutLink = document.getElementById('logout-link');
  var homepage = document.getElementById('homepage-link');
  var shop = document.getElementById('shop-link');

  // Show/hide elements based on login status
  if (loginStatus.textContent === 'User') {
    cartLink.style.display = 'block';
    logoutLink.style.display = 'block';
    loginStatus.style.display = 'block';
    homepage.style.display = 'block';
    shop.style.display = 'block';
  } else {
    loginStatus.style.display = 'block';
    homepage.style.display = 'block';
    shop.style.display = 'block';
    cartLink.style.display = 'none';
    logoutLink.style.display = 'none';
    
  }
}

function toggleForms() {
  var loginForm = document.getElementById('login-form');
  var registerForm = document.getElementById('register-form');
  console.log('test')

  if (loginForm && registerForm) {
    if (loginForm.style.display === 'block') {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    } else {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    }
  } else {
    console.error('Login or register form not found.');
  }
}



function register() {
  // Add your registration logic here
  alert('Registration functionality to be implemented.');
}