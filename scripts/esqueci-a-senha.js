/**
 * Projeto Integrador: Simulador Interativo
 * Incorporando Eventos
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** função de recuperação de senha - evento no botão RECUPERAR MINHA SENHA */
let passRecovery = document.getElementById("recoveryDiv");
passRecovery.addEventListener("submit", recoveryUser);
function recoveryUser(e) {
  e.preventDefault();
  let forgot = document.getElementById("forgotEmail").value;
  if (forgot === "marcelo@marcelo.com") {
    /** cria novo objeto User */
    let user0 = new User(marcelo);
    /** chamadas de método da classe User */
    user0.age = user0.yearOld();
    /** manipulando a DOM */
    let container = document.getElementById("recoveryDiv");
    container.innerHTML = `
    <p>Olá, ${user0.username}!</p>
    <p>Sua senha é: ${user0.password} e foi enviada para o seu email ${user0.email}.</p>
    `;
    /** push para o array de pessoas */
    arrUsers.push(user0);
  } else if (forgot === "erica@erica.com") {
    /** cria novo objeto User */
    let user01 = new User(erica);
    /** chamadas de método da classe User */
    user01.age = user01.yearOld();
    /** manipulando a DOM */
    let container = document.getElementById("recoveryDiv");
    container.innerHTML = `
    <p>Olá, ${user01.username}!</p>
    <p>Sua senha é: ${user01.password} e foi enviada para o seu email ${user01.email}.</p>
    `;
    /** push para o array de pessoas */
    arrUsers.push(user01);
  } else {
    alert("E-mail não cadastrado.");
  }
}
