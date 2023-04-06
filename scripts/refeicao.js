/**
 * Projeto Integrador: Simulador Interativo
 * Incorporando Bibliotecas
 * Turma 44260 Javascript
 * Erica Daikawa
 */

let user = null;
let isMeal = "";
let isMealCal = 0;
let isTraining = 0;
let mealSum = 0;
let trainingSum = 0;
let result = 0;

/** fetch taco-api */
let catSelect = document.querySelector("#category");
let food = document.querySelector("#food");
fetch("https://taco-api.onrender.com/api/v1/category")
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach((item) => {
      const option = document.createElement("option");
      option.innerHTML = `
      ${item.category}
      `;
      option.setAttribute("value", item.id);
      catSelect.append(option);
    });
  });

let catValue;
function catChange(element) {
  catValue = element.selectedIndex;
  console.log("catValue: ", catValue);
  foodList();
}
let foodValue;
function foodChange(elem) {
  foodValue = elem.value;
  console.log("foodValue: ", foodValue);
  foodCalorie();
}
async function foodCalorie() {
  let calorieValue = document.querySelector("#inputCalorie");
  const resp = await fetch(
    "https://taco-api.onrender.com/api/v1/food/" + foodValue
  );
  let data = await resp.json();
  console.log("food data: ", data[0]);
  calorieValue.innerHTML = `
      <input
      type="number"
      class="form-control text-dark"
      id="inputCalorie"
      value="${data[0].attributes.energy.kcal}"/>
  `;
  isMeal = data[0].description;
  isMealCal = data[0].attributes.energy.kcal;
}

async function foodList() {
  const resp = await fetch(
    "https://taco-api.onrender.com/api/v1/category/" + catValue + "/food"
  );
  let data = await resp.json();
  food.innerHTML = `<option value="">-- escolha um alimento --</option>`;

  await data.forEach((item) => {
    const option = document.createElement("option");
    option.innerHTML = `
    ${item.description}
    `;
    option.setAttribute("value", item.id);
    food.append(option);
  });
}

/** função de inserir refeição - evento no botão CADASTRAR */
let mealForm = document.getElementById("mealForm");
mealForm.addEventListener("submit", registerMeal);

function registerMeal(e) {
  e.preventDefault();
  /** usando ternário para verificar se há usuário logado */
  arrUsers[0] === undefined
    ? swal({
        title: "Primeiramente faça seu login.",
        text: "Logins teste:\nmarcelo@marcelo.com\nerica@erica.com",
        icon: "error",
        confirmButtonText: "Cool",
      })
    : (user = document.getElementById("profile").value);

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

    meal = isMealCal;
    /** insere no array de refeições */
    arrMeal.push(isMealCal);
    /** insere no array de treinos  */
    arrTraining.push(isTraining);

    /** uso de Spread/REST operator */
    function sumRegister(...array) {
      return array.reduce(function (acc, n) {
        return parseInt(acc) + parseInt(n);
      }, 0);
    }
    /** soma as refeições */
    mealSum = sumRegister(...arrMeal);
    /** soma os treinos */
    trainingSum = sumRegister(...arrTraining);

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
    <p>Você comeu agora: ${isMeal}, ${meal} calorias.</p>
    <p>Você já comeu hoje: ${mealSum}</p>
    <p>Você ainda precisa comer: ${caloriesLeft} calorias hoje.</p>
    <p>Objetivo de treinos semanais em dias: ${trainingGoal}</p>
    <p>Faltam: ${trainingLeft} treinos essa semana.</p>
    `;
  }
}
