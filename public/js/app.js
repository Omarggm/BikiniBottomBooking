// Our constants for the sign up and login buttons

const signUpButton = document.querySelectorAll(".sign-up-button")[0];
const signUpTile = document.querySelectorAll("#signUpTile")[0];
signUpTile.style.display = "none";
const closePopup = document.querySelectorAll(".close-popup")[0];
const frontPageTile = document.querySelectorAll(".frontpage-input-tile")[0];
// frontPageTile.style.display = "block";
const aligner = document.querySelectorAll(".aligner")[0];

const decider = document.querySelectorAll(".decider");

signUpButton.addEventListener("click", function () {
  signUpTile.style.display = "block";
});

closePopup.onclick = function () {
  signUpTile.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == signUpTile) {
    signUpTile.style.display = "none";
  }
};

// Password Retrieval Pop-up Modal stuff, for future development
const pwRetrievalPopup = document.querySelectorAll(".password-click-here")[0];
const passwordRetrieveTile = document.querySelectorAll(
  "#passwordRetrieveTile"
)[0];
passwordRetrieveTile.style.display = "none";
const closePasswordPopup = document.querySelectorAll(".close-pw-popup")[0];

pwRetrievalPopup.addEventListener("click", function () {
  passwordRetrieveTile.style.display = "block";
});

closePasswordPopup.onclick = function () {
  passwordRetrieveTile.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == passwordRetrieveTile) {
    passwordRetrieveTile.style.display = "none";
  }
};

const loginBtn = document.querySelectorAll(".login-button")[0];
// const signUpSubmitBtn = document.querySelectorAll(".sign-up-submit-btn")[0];

// const signUpUsername = $(".sign-up-username-field").val();
// const signUpEmail = $(".sign-up-email-field").val();
// const signUpPassword = $(".sign-up-password-field").val();

// // attemptSignup function sends a POST request to the server to create a new user
// const attemptSignUp = async () => {
//   const signUpUsername = $(".sign-up-username-field").val();
//   const signUpEmail = $(".sign-up-email-field").val();
//   const signUpPassword = $(".sign-up-password-field").val();

//   if (signUpUsername && signUpEmail && signUpPassword) {
//     const signUpResponse = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ signUpUsername, signUpEmail, signUpPassword }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (signUpResponse.ok) {
//       // If successful, reloads the page
//       alert("Sign up successful! Please sign in! ⚓").then(
//         (signUpTile.style.display = "none")
//       );
//     } else {
//       alert("sign up failed, please try again 🦈");
//     }
//   }
// };



// sign-up stuff directly below

//Omars version of the above function
const signUpSubmitButton = document.querySelector('.sign-up-submit-btn');


signUpSubmitButton.addEventListener('click', async () => {
  // Get the input field values
  const usernameInput = document.querySelector('.sign-up-username-field');
  const emailInput = document.querySelector('.sign-up-email-field');
  const passwordInput = document.querySelector('.sign-up-password-field');

  emailInput.value = emailInput.value.trim();
  emailInput.value = emailInput.value.toLowerCase();
  passwordInput.value = passwordInput.value.trim();


  // Create a data object with the input values
  const userData = {
    user_name: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };
  // Dan's validity checks
  if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
    return;
  } else if (emailInput.value.indexOf('@') < 1 || emailInput.value.indexOf('.') < 1 || emailInput.value.lastIndexOf('.') < emailInput.value.indexOf('@')) {
    alert("Please enter a valid email 🔱");
    return;
  } else if
    (passwordInput.value.length < 6) {
    alert("Please use at least 6 characters for your password")
    return;
  };
  // end of Dan's part of this one
  try {
    // Send the POST request to your server endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    if (!response.ok) {
      alert("Sorry, email already in use 🦈")
    } else if (response.ok) { alert("Sign up successful! Please sign in! ⚓") };
    // Handle the response as needed
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }

});



// attemptLogin function sends a POST request to the server to check if the user exists
const attemptLogin = async () => {
  var email = $(".login-field").val();
  var password = $(".password-field").val();
  email = email.trim();
  email = email.toLowerCase();
  password = password.trim();

  if (email && password) {
    const loginResponse = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (loginResponse.ok) {

      frontPageTile.style.display = "none";
      aligner.style.display = "none";
      $(".decider").html("<h3 class='logged-in-confirm'>You Are Logged In!</h3><br><p class='login-note'>" +
        "Please Look Forward To Our Many Specials, Local Business Promotions, and Bikinicoin Opportunities In Your Email!!</p>");

      console.log("login successful");
    } else {
      alert("sign in failed, please try again 🦈");
    }
  }
};

loginBtn.addEventListener("click", function () {
  const loginEmail = $(".login-field").val();
  const loginPassword = $(".password-field").val();

  // stops process and does nothing if nothing is entered for either field
  if (loginEmail === "" || loginPassword === "") {
    return;
  } else {
    // else tries to login the user
    attemptLogin(loginEmail, loginPassword);
  }
});

// below is replaced by a function above

// signUpSubmitBtn.addEventListener("click", function () {
//   const signUpUsername = $(".sign-up-username-field").val();
//   const signUpEmail = $(".sign-up-email-field").val();
//   const signUpPassword = $(".sign-up-password-field").val();

//   if (signUpUsername === "" || signUpEmail === "" || signUpPassword === "") {
//     return;
//   } else {
//     attemptSignUp(signUpUsername, signUpEmail, signUpPassword);
//   }
// });

// logout function below (I guess that might be kinda obvious though)
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("You aren't actually logged in, sir 🦈");
  }
};


let password = document.querySelector(".password-field");

password.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Trigger the button element with a click
    loginBtn.click();
  }
});

let passwordInput = document.querySelector(".sign-up-password-field");

passwordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    signUpSubmitButton.click();
  }
});

// Closes sign-up modal with Escape key if in password field specifically
$('.sign-up-password-field').keydown(function (event) {
  if (event.key === 'Escape') {
    signUpTile.style.display = "none";
  }
});




document.querySelector(".logoutBtn").addEventListener("click", logout);