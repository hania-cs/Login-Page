document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation example: Check if both fields are filled
    if (username.trim() === '' || password.trim() === '') {
        alert("Please enter both username and password.");
        return;
    }

    // You can perform further validation here, such as checking credentials against a database

    // If all validations pass, you can submit the form or perform other actions
    // For demonstration, I'm just alerting the user that login was successful
    alert("Login successful. Welcome, " + username + "!");
});