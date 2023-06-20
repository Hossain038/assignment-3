document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
  
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
  
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
  
    var isValid = true;
  
    // Validate Name
    if (name === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      nameError.textContent = '';
      isValid = false;
    }
  
    // Validate Email
    if (email === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = 'Invalid email address.';
      isValid = false;
    }
  
    // Validate Password
    if (password.length < 8) {
      passwordError.textContent = 'Password should be at least 8 characters long.';
      isValid = false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      passwordError.textContent = 'Password should contain at least one lowercase letter, one uppercase letter, and one digit.';
      isValid = false;
    }
  
    // Validate Confirm Password
    if (confirmPassword !== password) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    if (isValid) {
      // Form is valid, submit it or perform further actions
      console.log('Form submitted!');
    }
});

function clearErrors() {
  var errors = document.querySelectorAll('.error');
  errors.forEach(function(error) {
    error.textContent = '';
  });
}