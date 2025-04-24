// Event Handling Section

// Button Click Event
const button = document.getElementById("clickButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// Hover Event
const hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", function() {
  hoverElement.style.backgroundColor = "lightblue";
});
hoverElement.addEventListener("mouseout", function() {
  hoverElement.style.backgroundColor = "";
});

// Keypress Event
const keypressInput = document.getElementById("keypressInput");
const keypressOutput = document.getElementById("keypressOutput");
keypressInput.addEventListener("keydown", function(event) {
  keypressOutput.textContent = `Key pressed: ${event.key}`;
});

// Bonus: Long Press Detection (on a button)
let timeout;
button.addEventListener("mousedown", function() {
  timeout = setTimeout(function() {
    alert("Long press detected!");
  }, 1000);  // Trigger after 1 second
});
button.addEventListener("mouseup", function() {
  clearTimeout(timeout);  // Clear timeout if mouse is released before 1 second
});

// Interactive Elements Section

// Change Button Text or Color
const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", function() {
  changeButton.style.backgroundColor = "green";
  changeButton.innerText = "You clicked me!";
});

const images = document.querySelectorAll(".gallery img");
let currentImageIndex = 0;

// Initially hide all images except the first one
images.forEach((img, index) => {
  if (index !== 0) {
    img.style.display = "none";
  }
});

setInterval(() => {
  images[currentImageIndex].style.display = "none"; // Hide current image
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block"; // Show next image
}, 3000); // Change every 3 seconds

// Form Validation Section

// Real-Time Username Feedback
const usernameField = document.getElementById("username");
const usernameFeedback = document.getElementById("username-feedback");

usernameField.addEventListener("input", function() {
  if (usernameField.value.trim() === "") {
    usernameFeedback.textContent = "Username is required!";
    usernameFeedback.classList.remove("success");
  } else {
    usernameFeedback.textContent = "Looks good!";
    usernameFeedback.classList.add("success");
  }
});

// Email Validation
const emailField = document.getElementById("email");
emailField.addEventListener("input", function() {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(emailField.value)) {
    emailField.setCustomValidity("Please enter a valid email.");
  } else {
    emailField.setCustomValidity("");
  }
});

// Password Validation
const passwordField = document.getElementById("password");
passwordField.addEventListener("input", function() {
  if (passwordField.value.length < 8) {
    passwordField.setCustomValidity("Password must be at least 8 characters.");
  } else {
    passwordField.setCustomValidity("");
  }
});

// Form Submission with Validation
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value;

  if (username === "") {
    event.preventDefault();
    alert("Username is required!");
    return;
  }

  // Check email validity
  if (!emailField.checkValidity()) {
    event.preventDefault();
    alert("Please enter a valid email.");
    return;
  }

  // Check password validity
  if (!passwordField.checkValidity()) {
    event.preventDefault();
    alert("Password must be at least 8 characters.");
    return;
  }
});
