document.addEventListener('DOMContentLoaded', () => {
    let loginButton = document.querySelector(".log-in");
    let signupButton = document.querySelector(".sign-up");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = "login.html"; // Redirect to the existing login page
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", () => {
            window.location.href = "signup.html"; // Redirect to the existing signup page
        });
    }
});