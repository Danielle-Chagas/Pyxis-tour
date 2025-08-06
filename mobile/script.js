const btnLogin = document.getElementById("btn-login");
const btnCadastro = document.getElementById("btn-cadastro");
const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");

btnLogin.addEventListener("click", () => {
  formLogin.classList.add("ativo");
  formCadastro.classList.remove("ativo");
  btnLogin.classList.add("ativo");
  btnCadastro.classList.remove("ativo");
});

btnCadastro.addEventListener("click", () => {
  formCadastro.classList.add("ativo");
  formLogin.classList.remove("ativo");
  btnCadastro.classList.add("ativo");
  btnLogin.classList.remove("ativo");
});
