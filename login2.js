function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example credentials (you can update this as per your needs)
    var validUsername = "user";
    var validPassword = "password";

    if (username === validUsername && password === validPassword) {
        // Redirect to the home page
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials. Please try again.");
        return false; // Prevent form submission
    }
}
