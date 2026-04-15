const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  // se não tiver logado, manda pro login
  window.location.href = "/login.html";
} else {
  document.getElementById("userName").textContent = user.name;
  document.getElementById("userGreeting").textContent = user.name;
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "/login.html";
});