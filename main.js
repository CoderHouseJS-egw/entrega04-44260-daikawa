/**
 * Projeto Integrador: Simulador Interativo
 * Estrutura Inicial
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** prompt */
alert(
  "Controle para Marombeiros\nAplicativo para controle de refeições e exercícios"
);
alert("Etapas:\nCadastro pessoal\nCadastro da refeição ou do treino");

let nome = prompt("Seu nome: ");
let idade = prompt("Sua idade: ");
let intIdade = parseInt(idade);
let altura = parseInt(prompt("Sua altura em centímetros: "));
let peso = parseFloat(prompt("Seu peso: ")).toFixed(3);
let goalCalorias = parseInt(
  prompt("Digite o seu objetivo diário de calorias: ")
);
let goalTreino = parseInt(
  prompt("Digite o seu objetivo de treino semanal em dias: ")
);

alert(
  "Nome: " +
    nome +
    "\nIdade: " +
    idade +
    "\nAltura: " +
    altura +
    "\nPeso: " +
    peso +
    "\nCalorias Diárias: " +
    goalCalorias +
    "\nTreinos Semanais: " +
    goalTreino +
    "\n"
);
let refeicao = parseInt(prompt("Quantas calorias vc comeu na sua refeição? "));
let treino = prompt("Você treinou hoje? (s/n): ");
let qtTreino = 0;
if (treino == "s") {
  qtTreino = +1;
} else {
  qtTreino = +0;
}
/** primeira função */
const subtrai = (goal, hoje) => goal - hoje;

let restaCalorias = subtrai(goalCalorias, refeicao);
let restaTreino = subtrai(goalTreino, qtTreino);

alert(
  nome +
    ", você ainda precisa comer " +
    restaCalorias +
    " calorias hoje.\nFaltam " +
    restaTreino +
    " treinos essa semana."
);

/** função: recarregarAPagina */
const recarregarAPagina = () => {
  window.location.reload();
};
