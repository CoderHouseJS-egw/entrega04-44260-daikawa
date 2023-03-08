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
const pessoas = [];

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
class Pessoa {
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
/** função de login */
function login(welcome) {
  if (welcome === "s") {
    /** cria novo objeto Pessoa */
    let pessoa0 = new Pessoa(marcelo);
    /** chamadas de método da classe Pessoa */
    pessoa0.age = pessoa0.yearOld();
    alert("Bem-vindo, " + pessoa0.username);
    pessoa0.insertData();
    /** push para o array de pessoas */
    pessoas.push(pessoa0);
  } else {
    registrarPessoa();
  }
}
/** função de cadastro */
const registrarPessoa = () => {
  let cadastro = {
    username: prompt("Seu nome: "),
    bornDate: prompt("Digite sua data de nascimento no formato YYYY/MM/DD"),
    height: parseInt(prompt("Sua altura em centímetros: ")),
    weight: parseFloat(prompt("Seu peso: ")).toFixed(3),
    calorieGoal: parseInt(prompt("Digite o seu objetivo diário de calorias: ")),
    trainingGoal: parseInt(
      prompt("Digite o seu objetivo de treino semanal em dias: ")
    ),
  };
  let pessoaAux = new Pessoa(cadastro);
  pessoaAux.age = pessoaAux.yearOld();
  /** push para o array de pessoas */
  pessoas.push(pessoaAux);
  alert(
    "Nome: " +
      pessoaAux.username +
      "\nIdade: " +
      pessoaAux.age +
      "\nAltura: " +
      pessoaAux.height +
      "\nPeso: " +
      pessoaAux.weight +
      "\nCalorias Diárias: " +
      pessoaAux.calorieGoal +
      "\nTreinos Semanais: " +
      pessoaAux.trainingGoal +
      "\n"
  );
  pessoaAux.insertData();
};
/** função de novo cadastro */
const novoRegistro = () => {
  let novaPessoa = prompt("Registrar nova pessoa? s/n");
  if (novaPessoa === "s") {
    registrarPessoa();
    novoRegistro();
  }
};
/** função que cria um array apenas com os nomes */
let nomes = [];
const mostrarNomes = () => {
  /** array de nomes */
  const arrayNomes = [];
  /** percorrendo o array de objetos */
  for (const pessoa of pessoas) {
    arrayNomes.push(pessoa.username);
  }
  /** método join no array de nomes */
  nomes = arrayNomes.join(", ");
};
/** primeira chamada da função */
login(welcome);
novoRegistro();
mostrarNomes();
alert(
  "Alunos: " + nomes + "\nTemos " + pessoas.length + " alunos cadastrados."
);
console.log(pessoas);

/** função: recarregarAPagina (botão na navbar) */
const recarregarAPagina = () => {
  window.location.reload();
};
