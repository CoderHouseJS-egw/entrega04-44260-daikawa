# Maromba Fit
Projeto Integrador - Simulador Interativo

## Sumário
- [Maromba Fit](#maromba-fit)
  - [Sumário](#sumário)
  - [Desafio 04 de Javascript - Simulador Interativo](#desafio-04-de-javascript---simulador-interativo)
    - [Formato](#formato)
    - [Descrição sobre o algoritmo escolhido.](#descrição-sobre-o-algoritmo-escolhido)
    - [Estrutura HTML inicial do projeto](#estrutura-html-inicial-do-projeto)
  - [Desafio 05 de Javascript - Incorporar objetos](#desafio-05-de-javascript---incorporar-objetos)
    - [Recomendações](#recomendações)
    - [Descrição sobre o código realizado](#descrição-sobre-o-código-realizado)
  - [Desafio 06 de Javascript - Incorporar Arrays](#desafio-06-de-javascript---incorporar-arrays)
    - [Recomendações](#recomendações-1)
    - [Descrição sobre o código realizado](#descrição-sobre-o-código-realizado-1)
  - [Primeira Entrega do Projeto Final](#primeira-entrega-do-projeto-final)
    - [Objetivos gerais:](#objetivos-gerais)
    - [Objetivos específicos](#objetivos-específicos)
    - [Para considerar:](#para-considerar)
    - [Descrição sobre o que foi feito para essa entrega:](#descrição-sobre-o-que-foi-feito-para-essa-entrega)
  - [Desafio 08 de Javascript - Interagir com HTML](#desafio-08-de-javascript---interagir-com-html)
    - [Recomendações:](#recomendações-2)
    - [Descrição sobre o código realizado](#descrição-sobre-o-código-realizado-2)
  - [Backlog - implementações pensadas a fazer](#backlog---implementações-pensadas-a-fazer)
  - [Membros do grupo](#membros-do-grupo)
  - [Créditos](#créditos)

## Desafio 04 de Javascript - Simulador Interativo
Com os conhecimentos vistos até o momento, você começará a formular a estrutura inicial de seu projeto integrador. A partir dos exemplos mostrados na primeira aula, você deverá:
- Pensar no escopo de seu projeto: usará um agente de seguros? Um simulador de créditos? Um simulador personalizado?
- Formular a estrutura HTML do projeto.
- Incorporar ao menos um prompt para pedir um dado e depois mostrá-lo através do alert realizando alguma operação.
- Utilizar funções para realizar essas operações.

### Formato
Página HTML e código fonte em JavaScript.

### Descrição sobre o algoritmo escolhido.
Calculadora de calorias e treinos
- primeiro objetivo é a pessoa fazer o controle de quantas calorias ela come no dia
- segundo objetivo é o controle da atividade física semanal

Algoritmo:
- nesse momento inicial, pede-se qual o objetivo diário de calorias e o objetivo semanal de exercícios para o cadastro de meta
- a seguir, pede-se a quantidade de calorias da última refeição e se ela treinou ou não
- foi criada uma função que calcula quantas calorias ela ainda tem que comer até o fim do dia, e quantos treinos faltam para atingir o objetivo da semana.

### Estrutura HTML inicial do projeto
Criada estrutura inicial, com navbar, carrossel de boas vindas, cards direcionando o usuário para os registros, footer.
Usado bootstrap.

## Desafio 05 de Javascript - Incorporar objetos
A partir dos exemplos mostrados na primeira aula, e em função do tipo de simulador que tiver escolhido, deverá:
- Criar ao menos um objeto para controlar o funcionamento de seu simulador.
- Incorporar suas propriedades e seu construtor.
- Invocar esse objeto em algum momento onde o usuário realizar alguma ação.
- Utilizar seus métodos.

### Recomendações
Reconhecer elementos no simulador cuja informação está composta por mais de um valor e existem operações comuns (funções) para todos os elementos desse tipo e suas propriedades.

### Descrição sobre o código realizado
- Objeto identificado: usuário (pessoa);
- Foi criado uma classe Pessoa, com seu devido construtor que é usado para o cadastro;
- Foi criado o método ```yearOld()``` que pega o dado de data de nascimento do usuário para calcular a idade atual, subtraindo de ```Date()```;
- Criado o método ```insertData``` para inserir a refeição feita e o treino do dia;
- Criada a função de ```login/cadastro```, se o usuário diz não ter cadastro, ele fará o cadastro; se diz que tem o cadastro, deverá procurar o usuário. Nesse momento, usuário existente mockado ```Marcelo```.
- Foi criado o método ```age()``` que pega o dado de data de nascimento do usuário para calcular a idade atual, subtraindo de ```Date()```;
- Criado o método ```insertData``` para inserir a refeição feita e o treino do dia;
- Criada a função de ```login/cadastro```, se o usuário diz não ter cadastro, ele fará o cadastro; se diz que tem o cadastro, deverá procurar o usuário. Nesse momento, usuário existente mockado ```Marcelo```.

## Desafio 06 de Javascript - Incorporar Arrays
- Incorporar ao menos um array em seu projeto
- Utilizar alguns dos métodos ou propriedades vistos na aula.

### Recomendações
Os Arrays cumprem o papel de listas no programa. Principalmente, os utilizamos para agrupar elementos de um mesmo tipo. Sempre que for possível, utilize os métodos disponíveis para trabalhar com eles.

### Descrição sobre o código realizado
- Incorporado um array ao projeto, array pessoas.
- Alguns métodos incorporados: join, length, uso de for of, e console.log mostrando o array de pessoas.

## Primeira Entrega do Projeto Final
### Objetivos gerais:
- Codificar a funcionalidade inicial do simulador
- Identificar o fluxo de trabalho do script: captura de entradas, processamento essencial, notificação de resultados em forma de saída
### Objetivos específicos
- Capturar entradas com prompt()
- Declarar variáveis e objetos necessários
- Criar funções e/ou métodos para realizar operações
- Efetuar uma saída por alert() ou console.log()
### Para considerar:
- Estrutura em HTML e CSS, porém o JS avaliado ainda não interage com a estrutura.
### Descrição sobre o que foi feito para essa entrega:
- organização do método insertData(), fazendo com que os valores de calorias e treinos restantes sejam incorporados ao objeto;
- criada uma função de ordem superior para fazer o cálculo das calorias e treinos restantes;
- funções e variáveis em inglês
- saídas em alert(), saída final também em console.log().

## Desafio 08 de Javascript - Interagir com HTML
### Recomendações:
Geralmente, identificamos um único elemento DOM com o atributo `id` e um conjunto associado por `class`.
### Descrição sobre o código realizado
- Criada a parte de login. referente ao mini formulário de login da navbar superior. Se usados os usuários mockados `marcelo@marcelo.com` ou `erica@erica.com`, nesse momento ele criará um objeto desses mocks para ser usado. Se digitado qualquer outro email, ele pedirá para criar uma conta nova/logar com existente.
- Criada a parte de cadastro, referente à página de cadastro/nova conta. Ele recebe os dados através do formulário e cria uma nova pessoa.
- Criada a parte de esqueci minha senha, referente à página de recuperação de senha. Se usados os mesmos usuários mockados dados anteriormente, ele puxa do mock a senha do usuário.
- Criada a parte de registro de calorias e treinos, referente à página de refeição. Na Inicial há dois cards, um para treinos e um para refeições, ambos levam para o mesmo formulário nesse momento. Para poder fazer uso dessa parte, precisa entrar com um dos usuários no login superior, ou haverá um alert pedindo para fazer o login. Uma vez logado, os inputs de calorias e de treino são adicionados ao objeto do usuário criado. Os inputs de qual refeição e qual alimento ainda não funcionam, o intuito é puxar esses dados através de API no futuro.

## Backlog - implementações pensadas a fazer
- [ ] quando for possível armazenar dados, somar as refeições e dizer se o goal de calorias foi atingido ou ultrapassado
- [ ] somar os treinos e poder dizer se o goal de treinos foi atingido ou foi além
- [x] subir uma API de refeições e calorias.
- [ ] usar API no projeto.

## Membros do grupo
- Erica Daikawa

## Créditos
Photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/images/things/health?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@echaparro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Chaparro</a> on <a href="https://unsplash.com/s/photos/workout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@jannisbrandt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jannis Brandt</a> on <a href="https://unsplash.com/s/photos/fitness?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@johnarano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Arano</a> on <a href="https://unsplash.com/s/photos/fitness?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
