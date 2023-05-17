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