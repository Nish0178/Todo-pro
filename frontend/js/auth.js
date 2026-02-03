// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ❌ stop page refresh

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // TEMP CHECK (frontend only)
    if (email && password) {
      alert("Login successful");
      window.location.href = "dashboard.html"; // ✅ redirect
    } else {
      alert("Please enter email and password");
    }
  });
}

// ================= SIGNUP =================
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ❌ stop page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
      alert("Signup successful");
      window.location.href = "login.html"; // ✅ go to login
    } else {
      alert("Please fill all fields");
    }
  });
}
