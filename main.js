/**
 * Projeto Integrador: Simulador Interativo
 * Incorporar objetos
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** prompt */
alert(
  "Controle para Marombeiros\nAplicativo para controle de refeições e exercícios"
);
let welcome = prompt("Você já tem cadastro? s/n");

let marcelo = {
  username: "Marcelo",
  bornDate: "1972/02/14",
  height: 172,
  weight: 72,
  calorieGoal: 1700,
  trainingGoal: 5,
};
let pessoa0 = {};
let pessoa1 = {};

/** primeiro construtor */
class Pessoa {
  constructor(user) {
    this.username = user.username;
    // this.age = user.age; // trocar para data nasc e fazer a conta usando Date
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
    let refeicao = parseInt(
      prompt("Quantas calorias vc comeu na sua refeição? ")
    );
    let treino = prompt("Você treinou hoje? (s/n): ");
    let qtTreino = 0;
    if (treino == "s") {
      qtTreino = +1;
    } else {
      qtTreino = +0;
    }
    /** primeira função */
    const subtrai = (goal, hoje) => goal - hoje;

    let restaCalorias = subtrai(this.calorieGoal, refeicao);
    let restaTreino = subtrai(this.trainingGoal, qtTreino);

    alert(
      this.username +
        ", você ainda precisa comer " +
        restaCalorias +
        " calorias hoje.\nFaltam " +
        restaTreino +
        " treinos essa semana."
    );
  }
}
/** função de login/cadastro */
function login(welcome) {
  let cadastro = {};

  if (welcome === "s") {
    pessoa0 = new Pessoa(marcelo);
    pessoa0.age = pessoa0.yearOld();
    alert("Bem-vindo, " + pessoa0.username);
    pessoa0.insertData();
  } else {
    cadastro = {
      username: prompt("Seu nome: "),
      bornDate: prompt("Digite sua data de nascimento no formato YYYY/MM/DD"),
      height: parseInt(prompt("Sua altura em centímetros: ")),
      weight: parseFloat(prompt("Seu peso: ")).toFixed(3),
      calorieGoal: parseInt(
        prompt("Digite o seu objetivo diário de calorias: ")
      ),
      trainingGoal: parseInt(
        prompt("Digite o seu objetivo de treino semanal em dias: ")
      ),
    };
    pessoa1 = new Pessoa(cadastro);
    pessoa1.age = pessoa1.yearOld();
    alert(
      "Nome: " +
        pessoa1.username +
        "\nIdade: " +
        pessoa1.age +
        "\nAltura: " +
        pessoa1.height +
        "\nPeso: " +
        pessoa1.weight +
        "\nCalorias Diárias: " +
        pessoa1.calorieGoal +
        "\nTreinos Semanais: " +
        pessoa1.trainingGoal +
        "\n"
    );
    pessoa1.insertData();
  }
}

/** primeira chamada da função */
login(welcome);

/** função: recarregarAPagina (botão na navbar) */
const recarregarAPagina = () => {
  window.location.reload();
};
