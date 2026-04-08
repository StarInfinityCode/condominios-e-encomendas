const form = document.getElementById("cadastroForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    password: form.password.value,
    apartment: form.apartment.value,
    role: 'morador',
  };

  try {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = {};

    try {
      result = await res.json();
    } catch {
      console.log("Resposta não é JSON");
    }

    console.log("Resposta da API:", result);

    if (res.ok) {
      alert(result.message || "Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    } else {
      alert(result.error || result.message || "Erro ao cadastrar");
    }

  } catch (err) {
    console.error("Erro:", err);
    alert("Erro ao conectar com o servidor");
  }
});