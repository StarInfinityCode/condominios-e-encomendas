document.addEventListener("DOMContentLoaded", () => {
  const selectMorador = document.getElementById("morador");
  const form = document.getElementById("formEncomenda");

  // Simulando moradores (depois vem da API)
  const moradores = [
    { id: 1, nome: "João Silva - Apto 101" },
    { id: 2, nome: "Maria Souza - Apto 202" },
    { id: 3, nome: "Carlos Lima - Apto 303" }
  ];

  // Preencher select
  moradores.forEach(m => {
    const option = document.createElement("option");
    option.value = m.id;
    option.textContent = m.nome;
    selectMorador.appendChild(option);
  });

  // Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      moradorId: selectMorador.value,
      descricao: document.getElementById("descricao").value,
      remetente: document.getElementById("remetente").value
    };

    // Validação básica
    if (!data.moradorId || !data.descricao) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    console.log("Encomenda cadastrada:", data);

    alert("Encomenda cadastrada com sucesso!");

    form.reset();
  });
});