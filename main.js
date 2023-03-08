/**
 * Projeto Integrador: Simulador Interativo
 * Incorporar arrays
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** prompt */
alert(
  "Controle para Marombeiros\nAplicativo para controle de refeições e exercícios"
);
let welcome = prompt("Você já tem cadastro? s/n");
/** declarando o array de objetos */
const arrUsers = [];

/** usuário pré-existente mockado */
let marcelo = {
  username: "Marcelo",
  bornDate: "1972/02/14",
  height: 172,
  weight: 72,
  calorieGoal: 1700,
  trainingGoal: 5,
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
  /** método insertData - insere refeição e treino */
  insertData() {
    let isMeal = parseInt(
      prompt("Quantas calorias vc comeu na sua refeição? ")
    );
    this.meal = isMeal;
    let isTraining = prompt("Você treinou hoje? (s/n): ");
    let training = 0;
    if (isTraining == "s") {
      training = +1;
    } else {
      training = +0;
    }
    /** retornando funções  */
    const calc = () => {
      return (a, b) => a - b;
    };
    let funcRemainingCal = calc();
    let funcRemainingTrain = calc();

    this.caloriesLeft = funcRemainingCal(this.calorieGoal, isMeal);
    this.trainingLeft = funcRemainingTrain(this.trainingGoal, training);
    alert(
      this.username +
        ", você ainda precisa comer " +
        this.caloriesLeft +
        " calorias hoje.\nFaltam " +
        this.trainingLeft +
        " treinos essa semana."
    );
  }
}
/** função de login */
function login(welcome) {
  if (welcome === "s") {
    /** cria novo objeto User */
    let user0 = new User(marcelo);
    /** chamadas de método da classe User */
    user0.age = user0.yearOld();
    alert("Bem-vindo, " + user0.username);
    user0.insertData();
    /** push para o array de pessoas */
    arrUsers.push(user0);
  } else {
    registerUser();
  }
}
/** função de cadastro */
const registerUser = () => {
  let inputUser = prompt("Seu nome: ");
  let capitalized =
    inputUser.charAt(0).toUpperCase() + inputUser.slice(1).toLowerCase();
  let register = {
    username: capitalized,
    bornDate: prompt("Digite sua data de nascimento no formato YYYY/MM/DD"),
    height: parseInt(prompt("Sua altura em centímetros: ")),
    weight: parseFloat(prompt("Seu peso: ")).toFixed(3),
    calorieGoal: parseInt(prompt("Digite o seu objetivo diário de calorias: ")),
    trainingGoal: parseInt(
      prompt("Digite o seu objetivo de treino semanal em dias: ")
    ),
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
  userAux.insertData();
};
/** função de novo cadastro */
const newRegister = () => {
  let newUser = prompt("Registrar nova pessoa? s/n");
  if (newUser === "s") {
    registerUser();
    newRegister();
  }
};
let names = [];
/** função que cria um array apenas com os nomes */
const showNames = () => {
  /** array de nomes */
  const arrayNames = [];
  /** percorrendo o array de objetos com forEach() */
  arrUsers.forEach((user) => {
    arrayNames.push(user.username);
  });
  /** método join() no array de nomes */
  names = arrayNames.join(", ");
};
/** função de busca de alunos usando find() */
const searchUser = () => {
  let search = prompt(
    "Digite o nome do aluno para ver seu cadastro atual: "
  ).toLowerCase();
  const result = arrUsers.find((obj) => obj.username.toLowerCase() == search);
  alert(
    "Aluno: " +
      result.username +
      "\nIdade: " +
      result.age +
      "\nAltura: " +
      result.height +
      "\nPeso: " +
      result.weight +
      "\nObjetivo de treinos semanais em dias: " +
      result.trainingGoal +
      "\nFaltam " +
      result.trainingLeft +
      " treinos" +
      "\nObjetivo de calorias diárias: " +
      result.calorieGoal +
      "\nVocê ainda pode comer " +
      result.caloriesLeft +
      "calorias."
  );
  console.log("Dados do aluno: ");
  console.log(result);
};

/** primeira chamada da função */
login(welcome);
newRegister();
showNames();
alert(
  "Alunos: " + names + "\nTemos " + arrUsers.length + " alunos cadastrados."
);
searchUser();

/** função: pageReaload() (botão na navbar) */
const pageReload = () => {
  window.location.reload();
};
