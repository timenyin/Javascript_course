<form id="signup-form">
  <input type="text" id="username" placeholder="Username" required>
  <input type="email" id="email" placeholder="Email" required>
  <button type="submit">Sign Up</button>
</form>
<p id="error-message"></p>




// Store submitted users
const users = [];

// Form submission function
function handleSubmit(event) {
  event.preventDefault(); // Prevents page reload

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  // Validate inputs
  if (!username || !email) {
    showError("Please fill all fields!");
    return;
  }

  // Check if email already exists
  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    showError("Email already registered!");
    return;
  }

  // Add to users array
  users.push({ username, email });
  console.log("New user:", users);

  // Reset form
  event.target.reset();
  showError(""); // Clear error
}

// Show error message
function showError(message) {
  document.getElementById("error-message").textContent = message;
}

// Attach event listener
document.getElementById("signup-form").addEventListener("submit", handleSubmit);