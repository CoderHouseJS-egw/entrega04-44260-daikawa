/**
 * Projeto Integrador: Simulador Interativo
 * Segunda Entrega do Projeto Final
 * Turma 44260 Javascript
 * Erica Daikawa
 */

let user = null;
let isMeal = 0;
let isTraining = 0;
let arrMeal = [];
let arrTraining = [];
// arrUsers[result].arrMeal = [];
// arrUsers[result].arrTraining = [];
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
    arrUsers[result].meal = isMeal;
    arrUsers[result].training = isTraining;
    /** insere no array de refeições */
    arrUsers[result].arrMeal.push(isMeal);
    /** insere no array de treinos  */
    arrUsers[result].arrTraining.push(isTraining);

    /** soma as refeições */
    mealSum = arrUsers[result].arrMeal.reduce(function (prevVal, elem) {
      return parseInt(prevVal) + parseInt(elem);
    }, 0);
    /** soma os treinos */
    trainingSum = arrUsers[result].arrTraining.reduce(function (prevVal, elem) {
      return parseInt(prevVal) + parseInt(elem);
    }, 0);

    /** retornando funções  */
    const calc = () => {
      return (a, b) => a - b;
    };
    let funcRemainingCal = calc();
    let funcRemainingTrain = calc();

    arrUsers[result].caloriesLeft = funcRemainingCal(
      arrUsers[result].calorieGoal,
      mealSum
      // isMeal
    );
    arrUsers[result].trainingLeft = funcRemainingTrain(
      arrUsers[result].trainingGoal,
      trainingSum
      // isTraining
    );

    // adicionar valores
    const saveLocal = (key, value) => {
      localStorage.setItem(key, value);
    };
    saveLocal(localStorageUser, JSON.stringify(arrUsers[result]));

    /** manipulando a DOM */
    let container = document.getElementById("mealCard");
    container.innerHTML = `
    <p>Olá, ${arrUsers[result].username}!</p>
    <p>Verifique seus dados:</p>
    <p>Objetivo de calorias diárias: ${arrUsers[result].calorieGoal}</p>
    <p>Você comeu agora: ${arrUsers[result].meal} calorias.</p>
    <p>Você já comeu hoje: ${mealSum}</p>
    <p>Você ainda precisa comer: ${arrUsers[result].caloriesLeft} calorias hoje.</p>
    <p>Objetivo de treinos semanais em dias: ${arrUsers[result].trainingGoal}</p>
    <p>Faltam: ${arrUsers[result].trainingLeft} treinos essa semana.</p>
    `;
  }
}
