//your JS code here. If required.
window.onload = function() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var rememberCheckbox = document.getElementById("checkbox");
    var submitBtn = document.getElementById("submit");
    var existingBtn = document.getElementById("existing");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var username = usernameInput.value;
        var password = passwordInput.value;

        if (rememberCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert("Logged in as " + username);
    });

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existingBtn.style.display = "inline"; // changed display property to inline
    }

    existingBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var username = localStorage.getItem("username");
        alert("Logged in as " + username);
    });
};