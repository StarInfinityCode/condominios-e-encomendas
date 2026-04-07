const lista = document.getElementById("lista");

const encomendas = [
  {
    titulo: "Caixa grande - Mercado Livre",
    morador: "Carlos Silva",
    apto: "101",
    data: "13/03/2026 07:30",
    status: "aguardando"
  },
  {
    titulo: "Envelope - Shopee",
    morador: "Ana Souza",
    apto: "202",
    data: "13/03/2026 10:00",
    status: "retirado"
  }
];

function render() {
  lista.innerHTML = "";

  encomendas.forEach(e => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      <div class="info">
        <strong>${e.titulo}</strong>
        <span>${e.morador} - Apt ${e.apto}</span>
        <small>${e.data}</small>
      </div>

      <span class="badge ${e.status}">
        ${e.status}
      </span>
    `;

    lista.appendChild(div);
  });
}

render();

document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "/login.html";
});