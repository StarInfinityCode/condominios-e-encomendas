const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    console.log(result);

    if (res.ok) {
      alert("Login realizado com sucesso 🚀");

      localStorage.setItem("user", JSON.stringify(result.user));

      window.location.href = "index.html";
    } else {
      alert(result.error || "Email ou senha inválidos");
    }

  } catch (err) {
    console.error(err);
    alert("Erro ao conectar com o servidor");
  }
});