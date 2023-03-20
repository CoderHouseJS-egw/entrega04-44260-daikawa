/**
 * Projeto Integrador: Simulador Interativo
 * Incorporando Eventos
 * Turma 44260 Javascript
 * Erica Daikawa
 */
let loggedUser;
const arrUsers = [];

/** usuários pré-existentes mockados */
let marcelo = {
  username: "Marcelo",
  bornDate: "1972/02/14",
  height: 172,
  weight: 72,
  calorieGoal: 1700,
  trainingGoal: 5,
  email: "marcelo@marcelo.com",
  password: "monstro",
};
let erica = {
  username: "Erica",
  bornDate: "1977/09/25",
  height: 170,
  weight: 62,
  calorieGoal: 1500,
  trainingGoal: 3,
  email: "erica@erica.com",
  password: "bundananuca",
};
/** primeiro construtor */
class User {
  constructor(user) {
    this.username = user.username;
    this.bornDate = user.bornDate;
    this.height = user.height;
    this.weight = user.weight;
    this.calorieGoal = user.calorieGoal;
    this.trainingGoal = user.trainingGoal;
    this.email = user.email;
    this.password = user.password;
    this.age = this.yearOld();
  }
  /** método yearOld - calcula idade */
  yearOld() {
    const today = new Date();
    const birthDate = new Date(this.bornDate);
    let result = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      result--;
    }
    return result;
  }
}

/** função de login - evento no botão ENTRAR */
document.getElementById("sendLogin").onclick = login = (e) => {
  e.preventDefault();
  let login = document.getElementById("loginEmail").value;
  if (login === "marcelo@marcelo.com") {
    /** cria novo objeto User */
    let user0 = new User(marcelo);
    helloUser(user0);
  } else if (login === "erica@erica.com") {
    /** cria novo objeto User */
    let user1 = new User(erica);
    helloUser(user1);
  } else {
    alert(
      "Bem-vindo, crie sua conta!\n\nLogins teste:\nmarcelo@marcelo.com\nerica@erica.com"
    );
  }
  function helloUser(newUser) {
    arrUsers.push(newUser);
    console.log(arrUsers);
    /** manipulando a DOM e chamando evento no botão SAIR */
    let container = document.getElementById("profileUser");
    container.innerHTML = `
      <button value="Olá," disabled class="btn btn-lg btn-dark ">Olá</button>
      <button id="profile" disabled value="${newUser.username}" class="btn btn-lg btn-dark ">${newUser.username}</button>
      <button class="btn btn-lg btn-dark btn-outline-success reload" onClick="reloadPage();">Sair</button>
      `;
    loggedUser = document.getElementById("profile").value;
    console.log(`usuário: ${loggedUser}`);
  }
  /** evento Sair / reload da página */
  document.querySelector(".reload").addEventListener("click", (e) => {
    window.location.reload();
  });
};
/** função de cadastro - evento no botão CADASTRAR */
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", registerUser);
function registerUser(e) {
  e.preventDefault();
  let inputUser = document.querySelector("#inputName").value;
  let capitalized =
    inputUser.charAt(0).toUpperCase() + inputUser.slice(1).toLowerCase();
  let bornDate = document.querySelector("#inputBornDate").value;
  let height = document.querySelector("#inputHeight").value;
  let weight = document.querySelector("#inputWeight").value;
  let calorieGoal = document.querySelector("#inputCalorieGoal").value;
  let trainingGoal = document.querySelector("#inputTrainingGoal").value;
  let email = document.querySelector("#inputEmail").value;
  let password = document.querySelector("#inputPassword").value;
  let register = {
    username: capitalized,
    bornDate: bornDate,
    height: height,
    weight: weight,
    calorieGoal: calorieGoal,
    trainingGoal: trainingGoal,
    email: email,
    password: password,
  };
  let userAux = new User(register);
  /** push para o array de pessoas */
  arrUsers.push(userAux);
  /** manipulando a DOM */
  let container = document.getElementById("registerCard");
  container.innerHTML = `
    <p>Olá, ${userAux.username}!</p>
    <p>Verifique seus dados:</p>
    <p>Idade: ${userAux.age}</p>
    <p>Altura: ${userAux.height}</p>
    <p>Peso: ${userAux.weight}</p>
    <p>Seu objetivo diário de calorias: ${userAux.calorieGoal}</p>
    <p>Seu objetivo semanal de treinos: ${userAux.trainingGoal}</p>
    `;
  console.log(arrUsers);
}
