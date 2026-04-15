document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaUsuarios");
  const search = document.getElementById("searchUser");

  const usuarios = [
    {
      nome: "José Neto",
      email: "joseneto0418@gmail.com",
      tipo: "morador"
    },
    {
      nome: "José Soares",
      email: "joselimaprofissional18@gmail.com",
      tipo: "admin"
    }
  ];

  function renderUsuarios(filtro = "") {
    lista.innerHTML = "";

    const filtrados = usuarios.filter(u =>
      u.nome.toLowerCase().includes(filtro) ||
      u.email.toLowerCase().includes(filtro)
    );

    filtrados.forEach(user => {
      const div = document.createElement("div");
      div.className = "user-card-modern";

      div.innerHTML = `
        <div class="user-top">
          <div class="user-info">
            <div class="avatar">${user.nome[0]}</div>
            <div class="user-text">
              <h3>${user.nome}</h3>
              <span>${user.email}</span>
              ${user.tipo === "admin" ? `<div class="badge admin">Administrador</div>` : ""}
            </div>
          </div>

          <div class="user-actions">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
      `;

      lista.appendChild(div);
    });
  }

  search.addEventListener("input", (e) => {
    renderUsuarios(e.target.value.toLowerCase());
  });

  renderUsuarios();
});