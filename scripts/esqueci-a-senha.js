/**
 * Projeto Integrador: Simulador Interativo
 * Segunda Entrega do Projeto Final
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
  let localStorageUser;
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    if (forgot === key) {
      localStorageUser = value;
    }
  }

  if (forgot === "marcelo@marcelo.com") {
    /** cria novo objeto User */
    let user0 = new User(marcelo);
    forgotLogin(user0);
  } else if (forgot === "erica@erica.com") {
    /** cria novo objeto User */
    let user01 = new User(erica);
    forgotLogin(user01);
  } else if (forgot === localStorageUser.email) {
    forgotLogin(localStorageUser);
  } else {
    alert("E-mail não cadastrado.");
  }
  function forgotLogin(forgotEmail) {
    /** manipulando a DOM */
    let container = document.getElementById("recoveryDiv");
    container.innerHTML = `
   <p>Olá, ${forgotEmail.username}!</p>
   <p>Sua senha é: ${forgotEmail.password} e foi enviada para o seu email ${forgotEmail.email}.</p>
   `;
    /** push para o array de pessoas */
    arrUsers.push(forgotEmail);
  }
}
