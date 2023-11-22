// document.getElementById("signupForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const newUsername = document.getElementById("newUsername").value;
//   const newPassword = document.getElementById("newPassword").value;
//   const newEmail = document.getElementById("newEmail").value;

//   const newUser = {
//     username: newUsername,
//     password: newPassword,
//     email: newEmail,
//   };

//   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//   const isDuplicate = existingUsers.some(
//     (user) => user.username === newUsername || user.email === newEmail
//   );

//   if (isDuplicate) {
//     alert("Username or email already exists. Please choose a different one.");
//     return;
//   }

//   existingUsers.push(newUser);
//   alert("User registered successfully!");

//   localStorage.setItem("users", JSON.stringify(existingUsers));

//   console.log("User registered successfully!");
//   console.log("Updated users:", existingUsers);

//   window.location.href = "index.html";
// });


document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;
  const newEmail = document.getElementById("newEmail").value;

  const newUser = {
    username: newUsername,
    password: newPassword,
    email: newEmail,
  };

  try {
    // Make a POST request to register the new user
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const result = await response.json();

    if (result.success) {
      alert("User registered successfully!");
      console.log("User registered successfully!");
      console.log("Updated users:", result.message);
      window.location.href = "index.html";
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    alert('An error occurred during the fetch operation. Please check the console for details.');
  }
});
