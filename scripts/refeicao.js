/**
 * Projeto Integrador: Simulador Interativo
 * Operadores Avançados
 * Turma 44260 Javascript
 * Erica Daikawa
 */

let user = null;
let isMeal = 0;
let isTraining = 0;
let mealSum = 0;
let trainingSum = 0;
let result = 0;

/** função de inserir refeição - evento no botão CADASTRAR */
let mealForm = document.getElementById("mealForm");
mealForm.addEventListener("submit", registerMeal);

function registerMeal(e) {
  e.preventDefault();

  if (arrUsers[0] === undefined) {
    alert(
      "Primeiramente faça seu login.\n\nLogins teste:\nmarcelo@marcelo.com\nerica@erica.com"
    );
  }

  if (document.getElementById("profile").value) {
    user = document.getElementById("profile").value;
  }
  /** percorrendo itens do localStorage */
  let localStorageUser;
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    if (user === value.username) {
      localStorageUser = value.email;
    }
  }

  if (user) {
    isMeal = document.getElementById("inputCalorie").value;
    isTraining = document.getElementById("selectTraining").value;
    result = arrUsers.indexOf(user) + 1;
    /** desestrutura usuário */
    let {
      username,
      arrMeal,
      arrTraining,
      meal,
      calorieGoal,
      caloriesLeft,
      trainingGoal,
      trainingLeft,
    } = arrUsers[result];

    meal = isMeal;
    /** insere no array de refeições */
    arrMeal.push(isMeal);
    /** insere no array de treinos  */
    arrTraining.push(isTraining);

    /** soma as refeições */
    mealSum = arrMeal.reduce(function (prevVal, elem) {
      return parseInt(prevVal) + parseInt(elem);
    }, 0);
    /** soma os treinos */
    trainingSum = arrTraining.reduce(function (prevVal, elem) {
      return parseInt(prevVal) + parseInt(elem);
    }, 0);

    /** retornando funções  */
    const calc = () => {
      return (a, b) => a - b;
    };
    let funcRemainingCal = calc();
    let funcRemainingTrain = calc();

    caloriesLeft = funcRemainingCal(calorieGoal, mealSum);
    trainingLeft = funcRemainingTrain(trainingGoal, trainingSum);

    // adicionar valores
    const saveLocal = (key, value) => {
      localStorage.setItem(key, value);
    };
    saveLocal(localStorageUser, JSON.stringify(arrUsers[result]));

    /** manipulando a DOM */
    let container = document.getElementById("mealCard");
    container.innerHTML = `
    <p>Olá, ${username}!</p>
    <p>Verifique seus dados:</p>
    <p>Objetivo de calorias diárias: ${calorieGoal}</p>
    <p>Você comeu agora: ${meal} calorias.</p>
    <p>Você já comeu hoje: ${mealSum}</p>
    <p>Você ainda precisa comer: ${caloriesLeft} calorias hoje.</p>
    <p>Objetivo de treinos semanais em dias: ${trainingGoal}</p>
    <p>Faltam: ${trainingLeft} treinos essa semana.</p>
    `;
  }
}
