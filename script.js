document.getElementById("enviar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const observacao = document.getElementById("observacao").value;

  const tabela = document.getElementById("dados-cliente");
  tabela.innerHTML = `
        <tr>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${observacao}</td>
        </tr>
    `;

  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("tabela-container").classList.remove("hidden");
});

document.getElementById("voltar").addEventListener("click", () => {
  document.getElementById("formulario").classList.remove("hidden");
  document.getElementById("tabela-container").classList.add("hidden");
});
