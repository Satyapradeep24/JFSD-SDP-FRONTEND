const loginForm = document.querySelector(".sign-in-form");
const registerForm = document.querySelector(".sign-up-form");
const serverUrl = "http://localhost:8188"; // Update to your server's URL

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;


  fetch("http://localhost:8188/login", {
      method: "POST",
      body: JSON.stringify({
          email: loginForm.email.value,
          password: loginForm.password.value
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      // Login was successful, handle the response accordingly
      
      console.log("Login successful!");
      console.log("Investor ID:", data);
      
      sessionStorage.setItem("sid",data.investorid) ;
      
      setTimeout(function () {
        window.location.href = "investor_dashboard.html";
      }, 100);

          // You can redirect to a different page or perform other actions here
      } else {
          // Login failed, handle the response accordingly
          console.log("Login failed!");
          // You can show an error message to the user or perform other actions here
      }
  })
  .catch(error => {
      console.error("An error occurred:", error);
      // Handle any error that occurred during the fetch request
  });
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = registerForm.firstName.value;
  const lastName = registerForm.lastName.value;
  const emailId = registerForm.emailId.value;
  const contactNumber = registerForm.contactNumber.value;
  const passwordRegister = registerForm.passwordRegister.value;


  fetch("http://localhost:8188/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: registerForm.firstName.value,
        lastName: registerForm.lastName.value,
        emailId: registerForm.emailId.value,
        contactNumber: registerForm.contactNumber.value,
        password: registerForm.passwordRegister.value
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      if (response.ok) {
          // Login was successful, handle the response accordingly
          console.log("Registration successful!");
          setTimeout(function () {
            window.location.href = "login.html";
          }, 2000);
          // You can redirect to a different page or perform other actions here
      } else {
          // Login failed, handle the response accordingly
          console.log("Registration failed!");
          // You can show an error message to the user or perform other actions here
      }
  })
  .catch(error => {
      console.error("An error occurred:", error);
      // Handle any error that occurred during the fetch request
  });
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
