// store submitted users 
const users = [ ];

// Form submission function 
function handleSubmit(event) {
    event.preventDefault(); //Prevent page reload 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;




    //Validate inputs 
    if(!username ||  !email) {
             showError("Please fill the all Fields!");
             return;
    }


      // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if(emailExists) {
        showError("Email  already Registered")
        return;
    }

    // Add to users array
    users.push({username, email})
    console.log("new user",  users);


    // Reset Form
    event.target.reset();
    showError("")  
}


// Show error message 
function showError(message) {
    document.getElementById("error-message").textContent = message;
}

// Attach event Listener 
document.getElementById("signup-form").addEventListener("submit", handleSubmit)


