const container = document.querySelector(".container");
const userEnter = document.querySelector(".user-enter");
const containerUser = document.querySelector(".container-user");

const tituloUser = document.createElement("h1");

const botaoVoltar = document.createElement("BUTTON");
const textoBotao = document.createTextNode("Voltar");

function entrar() {
  const nameUser = document.querySelector("[textName]").value;
  const textoTitulo = document.createTextNode(
    `Seja bem-vindo(a), ${nameUser}!`
  );

  container.classList.add("hidden");

  containerUser.appendChild(tituloUser);
  tituloUser.appendChild(textoTitulo);

  containerUser.appendChild(botaoVoltar);
  botaoVoltar.appendChild(textoBotao);

  userEnter.classList.add("show");
}

botaoVoltar.onclick = function voltar() {
  document.location.reload(true);
  const nameUser = (document.querySelector("[textName]").value = "");

  container.classList.remove("hidden");
  userEnter.classList.remove("show");
};
