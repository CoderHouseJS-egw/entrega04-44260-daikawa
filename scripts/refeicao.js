/**
 * Projeto Integrador: Simulador Interativo
 * DOM
 * Turma 44260 Javascript
 * Erica Daikawa
 */

let user = null;
let isMeal = 0;
let isTraining = 0;
let result = 0;

/** função de inserir refeição */
document.getElementById("sendMeal").onclick = registerMeal = (e) => {
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
    alert(
      arrUsers[result].username +
        "\n\nObjetivo de calorias diárias: " +
        arrUsers[result].calorieGoal +
        "\nVocê comeu " +
        arrUsers[result].meal +
        " calorias.\n" +
        "Você ainda precisa comer " +
        arrUsers[result].caloriesLeft +
        " calorias hoje." +
        "\n\nObjetivo de treinos semanais em dias: " +
        arrUsers[result].trainingGoal +
        "\nFaltam " +
        arrUsers[result].trainingLeft +
        " treinos essa semana."
    );
    console.log(arrUsers[result]);
  }
};
