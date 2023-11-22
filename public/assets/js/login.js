  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Fetch to authenticate user from the server
    fetch("http://localhost:3000/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful!");
          console.log("Redirecting to home.html...");
          window.location.href = "home.html";
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error authenticating user:", error);
      });
  })