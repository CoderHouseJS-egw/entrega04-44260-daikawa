/**
 * Projeto Integrador: Simulador Interativo
 * DOM
 * Turma 44260 Javascript
 * Erica Daikawa
 */

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

/** função de login */
document.getElementById("sendLogin").onclick = login = (e) => {
  e.preventDefault();
  let login = document.getElementById("loginEmail").value;
  if (login === "marcelo@marcelo.com") {
    /** cria novo objeto User */
    let user0 = new User(marcelo);
    /** chamadas de método da classe User */
    user0.age = user0.yearOld();
    alert("Bem-vindo, " + user0.username);
    // user0.insertData();
    /** push para o array de pessoas */
    arrUsers.push(user0);
    console.log(arrUsers);
    let container = document.getElementById("profileUser");
    container.innerHTML = `<h2 >Olá, <input id="profile" value="${user0.username}" /></h2>`;
    let user = undefined;
    user = document.getElementById("profile").value;
    console.log(`usuário: ${user}`);
  } else if (login === "erica@erica.com") {
    /** cria novo objeto User */
    let user1 = new User(erica);
    /** chamadas de método da classe User */
    user1.age = user1.yearOld();
    alert("Bem-vindo, " + user1.username);
    /** push para o array de pessoas */
    arrUsers.push(user1);
    console.log(arrUsers);
    let container = document.getElementById("profileUser");
    container.innerHTML = `<h2 >Olá, <input id="profile" value="${user1.username}" /></h2>`;
    let user = undefined;
    user = document.getElementById("profile").value;
    console.log(`usuário: ${user}`);
  } else {
    alert(
      "Bem-vindo, crie sua conta!\n\nLogins teste:\nmarcelo@marcelo.com\nerica@erica.com"
    );
  }
};
/** função de cadastro */
document.getElementById("sendButton").onclick = registerUser = (e) => {
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
  userAux.age = userAux.yearOld();
  /** push para o array de pessoas */
  arrUsers.push(userAux);

  alert(
    "Nome: " +
      userAux.username +
      "\nIdade: " +
      userAux.age +
      "\nAltura: " +
      userAux.height +
      "\nPeso: " +
      userAux.weight +
      "\nCalorias Diárias: " +
      userAux.calorieGoal +
      "\nTreinos Semanais: " +
      userAux.trainingGoal +
      "\n"
  );
  console.log(arrUsers);
};
