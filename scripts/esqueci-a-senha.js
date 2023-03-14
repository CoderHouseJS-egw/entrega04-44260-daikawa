/**
 * Projeto Integrador: Simulador Interativo
 * DOM
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** função de recuperação de senha */
document.getElementById("sendRecoveryButton").onclick = recoveryUser = (e) => {
  e.preventDefault();
  let forgot = document.getElementById("forgotEmail").value;
  if (forgot === "marcelo@marcelo.com") {
    /** cria novo objeto User */
    let user0 = new User(marcelo);
    /** chamadas de método da classe User */
    user0.age = user0.yearOld();
    alert("Bem-vindo, " + user0.username + "\nSua senha é: " + user0.password);
    /** push para o array de pessoas */
    arrUsers.push(user0);
  } else if (forgot === "erica@erica.com") {
    /** cria novo objeto User */
    let user01 = new User(erica);
    /** chamadas de método da classe User */
    user01.age = user01.yearOld();
    alert(
      "Bem-vindo, " + user01.username + "\nSua senha é: " + user01.password
    );
    /** push para o array de pessoas */
    arrUsers.push(user01);
  } else {
    alert("E-mail não cadastrado.");
  }
};
