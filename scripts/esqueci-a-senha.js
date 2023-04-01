/**
 * Projeto Integrador: Simulador Interativo
 * Incorporando bibliotecas
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** função de recuperação de senha - evento no botão RECUPERAR MINHA SENHA */
let passRecovery = document.getElementById("recoveryDiv");
passRecovery.addEventListener("submit", recoveryUser);

function recoveryUser(e) {
  e.preventDefault();
  let forgot = document.getElementById("forgotEmail").value;
  /** percorrendo itens do localStorage */
  let localStorageKey;
  let localStorageUser;
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    if (forgot === key) {
      localStorageKey = key;
      localStorageUser = value;
    }
  }
  if (forgot !== localStorageKey) {
    if (forgot === "marcelo@marcelo.com") {
      /** cria novo objeto User */
      let user0 = new User(marcelo);
      forgotLogin(user0);
    } else if (forgot === "erica@erica.com") {
      /** cria novo objeto User */
      let user01 = new User(erica);
      forgotLogin(user01);
    } else {
      Toastify({
        text: "Email não encontrado. Clique aqui para criar sua conta!",
        duration: 5000,
        destination: "/cadastro.html",
      }).showToast();
    }
  } else {
    forgotLogin(localStorageUser);
  }

  function forgotLogin(forgotEmail) {
    /** desestrutura o login */
    const { username, email, password } = forgotEmail;
    /** manipulando a DOM */
    let container = document.getElementById("recoveryDiv");
    container.innerHTML = `
   <p>Olá, ${username}!</p>
   <p>Sua senha é: ${password} e foi enviada para o seu email ${email}.</p>
   `;
  }
}
