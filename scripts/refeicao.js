/**
 * Projeto Integrador: Simulador Interativo
 * Incorporando Eventos
 * Turma 44260 Javascript
 * Erica Daikawa
 */

let user = null;
let isMeal = 0;
let isTraining = 0;
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

  if (user) {
    isMeal = document.getElementById("inputCalorie").value;
    isTraining = document.getElementById("selectTraining").value;
    result = arrUsers.indexOf(user) + 1;
    arrUsers[result].meal = isMeal;
    arrUsers[result].training = isTraining;

    /** retornando funções  */
    const calc = () => {
      return (a, b) => a - b;
    };
    let funcRemainingCal = calc();
    let funcRemainingTrain = calc();

    arrUsers[result].caloriesLeft = funcRemainingCal(
      arrUsers[result].calorieGoal,
      isMeal
    );
    arrUsers[result].trainingLeft = funcRemainingTrain(
      arrUsers[result].trainingGoal,
      isTraining
    );
    /** manipulando a DOM */
    let container = document.getElementById("mealCard");
    container.innerHTML = `
    <p>Olá, ${arrUsers[result].username}!</p>
    <p>Verifique seus dados:</p>
    <p>Objetivo de calorias diárias: ${arrUsers[result].calorieGoal}</p>
    <p>Você comeu: ${arrUsers[result].meal} calorias.</p>
    <p>Você ainda precisa comer: ${arrUsers[result].caloriesLeft} calorias hoje.</p>
    <p>Objetivo de treinos semanais em dias: ${arrUsers[result].trainingGoal}</p>
    <p>Faltam: ${arrUsers[result].trainingLeft} treinos essa semana.</p>
    `;
    console.log(arrUsers[result]);
  }
}
