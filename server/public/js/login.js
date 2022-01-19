const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const user_name = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (user_name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  const user_name = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const confirmPassword = document.querySelector("#confirm-password").value.trim();

  if(password!==confirmPassword) {
    alert("The passwords do not match!");
    return
  };

  if (user_name && email && password && confirmPassword) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {

      const loginResponse = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ user_name, password }),
        headers: { "Content-Type": "application/json" },
      });

      if(loginResponse.ok){
        document.location.replace("/profile");
      }

    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("login-btn")
  .addEventListener("click", loginFormHandler);

document
  .getElementById("signup-form")
  .addEventListener("click", signupFormHandler);
