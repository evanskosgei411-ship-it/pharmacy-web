const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "customer" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    error.textContent = "Invalid username or password";
  }
}
