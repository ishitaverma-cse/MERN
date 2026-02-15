// Step 1: Get form element
let form = document.getElementById("loginForm")

// Step 2: Add event listener
form.addEventListener("submit", function() {

    // Prevent page reload
    // event.preventDefault();

    // Step 3: Get input values
    let username = document.getElementById("userName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    // Step 4: Print in console
    console.log("Username:", username)
    console.log("Email:", email)
    console.log("Password:", password)

    // Step 5: Save in sessionStorage
    sessionStorage.setItem("username", username)
    sessionStorage.setItem("email", email)
    sessionStorage.setItem("password", password)

    alert("Data is saved in session storage!")
});

