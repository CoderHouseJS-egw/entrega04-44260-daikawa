/**
 * Projeto Integrador: Simulador Interativo
 * Segunda Entrega do Projeto Final
 * Turma 44260 Javascript
 * Erica Daikawa
 */
let userAux = {};
const arrUsers = [];

/** usuários pré-existentes mockados */
let marcelo = {
  username: "Marcelo",
  bornDate: "1972/02/14",
  height: 172,
  weight: 72,
  calorieGoal: 1700,
  trainingGoal: 5,
  arrMeal: [],
  arrTraining: [],
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
  arrMeal: [],
  arrTraining: [],
  email: "erica@erica.com",
  password: "bumbumnanuca",
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
    this.arrMeal = user.arrMeal;
    this.arrTraining = user.arrTraining;
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
  /** percorrendo itens do localStorage */
  let localStorageUser;
  let localStorageKey;
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));

    if (login === key) {
      localStorageUser = value;
      localStorageKey = key;
    }
  }
  /** condicionais para login */
  if (login !== localStorageKey) {
    if (login === "erica@erica.com") {
      /** cria novo objeto User */
      userAux = new User(erica);
      helloUser(userAux);
    }
    if (login === "marcelo@marcelo.com") {
      /** cria novo objeto User */
      userAux = new User(marcelo);
      helloUser(userAux);
    } else {
      alert(
        "Bem-vindo, crie sua conta!\n\nLogins teste:\nmarcelo@marcelo.com\nerica@erica.com"
      );
    }
  }
  if (login === localStorageUser.email) {
    helloUser(localStorageUser);
  }
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
  let heightValue = document.querySelector("#inputHeight").value;
  let weightValue = document.querySelector("#inputWeight").value;
  let calorieGoalValue = document.querySelector("#inputCalorieGoal").value;
  let trainingGoalValue = document.querySelector("#inputTrainingGoal").value;
  let email = document.querySelector("#inputEmail").value;
  let password = document.querySelector("#inputPassword").value;
  let register = {
    username: capitalized,
    bornDate: bornDate,
    height: heightValue,
    weight: weightValue,
    calorieGoal: calorieGoalValue,
    trainingGoal: trainingGoalValue,
    email: email,
    password: password,
    arrMeal: [],
    arrTraining: [],
  };
  userAux = new User(register);
  helloUser(userAux);
  /** desestruturação */
  const { username, age, height, weight, calorieGoal, trainingGoal } = userAux;
  /** manipulando a DOM */
  let container = document.getElementById("registerCard");
  container.innerHTML = `
    <p>Olá, ${username}!</p>
    <p>Verifique seus dados:</p>
    <p>Idade: ${age}</p>
    <p>Altura: ${height}</p>
    <p>Peso: ${weight}</p>
    <p>Seu objetivo diário de calorias: ${calorieGoal}</p>
    <p>Seu objetivo semanal de treinos: ${trainingGoal}</p>
    `;
}

/** função de armazenamento no localStorage */
function saveLocalStorage() {
  /** armazenando no localStorage */
  const saveLocal = (key, value) => {
    localStorage.setItem(key, value);
  };
  for (const user of arrUsers) {
    saveLocal(user.email, JSON.stringify(user));
  }
}

function helloUser(newUser) {
  /** push para o array de pessoas */
  arrUsers.push(newUser);
  saveLocalStorage();
  /** manipulando a DOM e chamando evento no botão SAIR */
  let container = document.getElementById("profileUser");
  container.innerHTML = `
    <button value="Olá," disabled class="btn btn-lg btn-dark ">Olá</button>
    <button id="profile" disabled value="${newUser.username}" class="btn btn-lg btn-dark ">${newUser.username}</button>
    <button class="btn btn-lg btn-dark btn-outline-success reload" type="submit" onClick="reloadPage();">Sair</button>
    `;
  /** evento Sair / evento no botão SAIR - reload da página */
  document.querySelector(".reload").addEventListener("click", () => {
    window.location.reload();
  });
}
