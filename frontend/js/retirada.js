document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("codigoRetirada");
  const btn = document.getElementById("btnBuscar");
  const feedback = document.getElementById("feedback");

  function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
  }

  function buscarCodigo() {
    const codigo = input.value.trim();

    if (!codigo) {
      showFeedback("Digite um código!", "error");
      return;
    }

    // Simulação
    if (codigo === "123456") {
      showFeedback("✅ Retirada confirmada!", "success");
    } else {
      showFeedback("❌ Código não encontrado", "error");
    }

    input.value = "";
    input.focus();
  }

  btn.addEventListener("click", buscarCodigo);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      buscarCodigo();
    }
  });

  input.focus();

  document.querySelector(".back-btn")
    .addEventListener("click", () => window.history.back());
});