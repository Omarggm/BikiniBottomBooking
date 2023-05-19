// Code goes here

// Sign-up Pop-up Modal stuff

const signUpButton = document.querySelectorAll(".sign-up-button")[0];
const signUpTile = document.querySelectorAll("#signUpTile")[0];
signUpTile.style.display = "none";
const closePopup = document.querySelectorAll(".close-popup")[0];

signUpButton.addEventListener("click", function () {
    signUpTile.style.display = "block";
});

closePopup.onclick = function () {
    signUpTile.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == signUpTile) {
        signUpTile.style.display = "none";
    }
}


// Password Retrieval Pop-up Modal stuff, for future development
const pwRetrievalPopup = document.querySelectorAll(".password-click-here")[0];
const passwordRetrieveTile = document.querySelectorAll("#passwordRetrieveTile")[0];
passwordRetrieveTile.style.display = "none";
const closePasswordPopup = document.querySelectorAll(".close-pw-popup")[0];

pwRetrievalPopup.addEventListener("click", function () {
    passwordRetrieveTile.style.display = "block";
});


closePasswordPopup.onclick = function () {
    passwordRetrieveTile.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == passwordRetrieveTile) {
        passwordRetrieveTile.style.display = "none";
    }
}

let loginUsername = $(".login-field").val();
let loginPassword = $(".password-field").val();
const loginBtn = document.querySelectorAll(".login-button")[0];

// attemptLogin function sends a POST request to the server to check if the user exists


loginBtn.addEventListener("click", function () {
    loginUsername = $(".login-field").val();
    loginPassword = $(".password-field").val()
    
    // stops process if nothing is entered
    if (loginUsername === "" && loginPassword === "") {
        return;
    } else {
        attemptLogin(loginUsername, loginPassword);
    }
});