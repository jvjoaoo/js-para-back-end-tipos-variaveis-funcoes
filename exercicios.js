/*
// 1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const variavelString = 'Variavel do tipo string'
const variavelNumero = 53;
const variavelBoolean1 = true;
const variavelBoolean2 = false;

console.log(`Armazenando ${variavelString} e do tipo numérico: ${variavelNumero}`)

if (variavelNumero < 50) {
    console.log(variavelBoolean1); // -> Se for menor que o valor armazenado na variavelNumero, vai ser exibido true (verdadeiro)
} else {
    console.log(variavelBoolean2); // -> Se não for menor o valor armazenado na variavelNumero, vai ser exibido false (falso)
}

// 2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando
//  template strings. Por fim, imprima os resultados obtidos no console.

const nome = 'João Vitor';
const sobrenome = 'Laurindo';

const nomeCompleto = nome + ' ' + sobrenome;
const nomeCompletoTemplateString = `${nome} ${sobrenome}`;

console.log(nomeCompleto, `Resultado com templateString: ${nomeCompletoTemplateString}`);

// 3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e
//  exiba o resultado no console.

const nomeUser = 'João Vitor Laurindo';
const idade = '25'
const infoUser = `${nome}, tenho ${idade}`;

console.log(`Praticando JavaScript: sou o ${infoUser} anos`);


// 4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let numero;
numero = 85
console.log('Variável número valor inicial: ' + numero);

numero = 45
console.log('Variável número valor reatribuido: ' + numero);


// 5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log
//  e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var primeiroNumero = 88;

if (true){
   var segundoNumero = 90 ;
    console.log(`Exibindo o primeiro número: ${primeiroNumero} e o segundo número: ${segundoNumero} no console.log`);
}

let terceiroNumero = 50;

if(true){
    let quartoNumero = 25;
}

console.log(`Exibindo o terceiro número: ${terceiroNumero} e o quarto número: ${quartoNumero} no console.log`);



// 6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não 
// dependendo do valor da variável.

const clima01 = false

if (clima01){
    console.log('Prepare o guarda-chuva pois hoje tem fortes índices de chuva')
} else {
    console.log('Saia com uma vestimenta mais fresca pois hoje tem previsão de sol')
}

*/

const estudante = "Carlos";

const notas = [8, 10, 9.5, 7]

const somaDasNotas = notas.reduce((soma, nota) => soma + nota, 0)

/*const notaPrimeiroBi = 5
const notaSegundoBi = 5
const notaTerceiroBi = 5
const notaQuartoBi = 5
*/

/*
const mediaFinal = somaDasNotas / 4

if (mediaFinal > 5){
    console.log(`Nota: ${mediaFinal.toFixed(2)} Parabéns ${estudante}, você foi aprovado para o próximo ano letivo 😀 Desejamos a você boas festas!`)
} else {
    console.log(`Nota: ${mediaFinal.toFixed(2)} Quase lá ${estudante}, infelizmente você não foi aprovado para a próxima etapa ☹  mais sorte na próxima, desejamos boas festas!`)
}

*/

// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const mensagem = 'Bem vindo as práticas de JavaScript'

//console.log(mensagem, mensagem.length + " caracteres")
//console.log(mensagem.toUpperCase())

// 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let exemplo = null;
let segundoExemplo;

//console.log(exemplo)
//console.log(segundoExemplo)


// 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const identificador = 'João Vitor'
const idade = 25
const verificacao = true

//console.log(`${identificador} tem ${idade} anos de idade, essa informação é ${verificacao}`)

// 4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const primeiroValor = 25;
const convertendoParaString = primeiroValor.toString();

const segundoValor = '45';
const convertendoParaNumber = parseInt(segundoValor);

//console.log(convertendoParaString);
//console.log(convertendoParaNumber);

// 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba
//  os resultados finais no console.

const modificandoMensagem = "mudando a caixa da mensagem";

//console.log(modificandoMensagem.toUpperCase())
//console.log(modificandoMensagem.toLowerCase())
//console.log(modificandoMensagem.slice(0,15))

// 6. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável 
// chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldoAtual = 1000;
let deposito = 500;
let saque = 100;

let operacao = saldoAtual + deposito - saque

//console.log(operacao)

// 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

const numeroIdenticado = 25;

let verificacaoNumerica = numeroIdenticado % 2 === 0 ? "O número escolhido é par" :  "O número escolhido é impar";

//console.log(verificacaoNumerica);

// 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade.
//  Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const userLog = true;
const userAdm = true;

if(userLog && userAdm){
    //console.log("Acesso permitido ao sistema.")
} else {
    //console.log("Acesso negado. É necessário estar logado como administrador.")
}

// 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const hojeSabado = false;
const fezSol = false;

if (hojeSabado || fezSol){
    //console.log("Verdadeiro")
} else {
    //console.log("Falso");
}

// 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima
//  e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const idadeUser = 17;
const idadeMinima = 18;

if(idadeUser >= idadeMinima){
    console.log("Compra permitida.")
} else {
    //console.log("Acesso negado. O usuário não tem a idade minima para comprar o ingresso.")
}

// 1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. 
// Em seguida, chame a função e exiba a saudação no console.
/*
function saudacao (nome){
    return `Olá ${nome} seja bem vindo!`
}

console.log(saudacao('Igor'))


// 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function verificacaoIdade (nome, idade){
    if (idade >= 18){
        return `Olá ${nome}, você tem ${idade} de idade e é maior de idade.`
    } else {
        return `Desculpe ${nome}, você tem apenas ${idade} de idade e não tem autorização para prosseguir.`
    }
}

console.log(verificacaoIdade('Igor', 18));


// 3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) 
// utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function verificacaoPalindromo(palavra){
    const palavraInversa =  palavra.split('').reverse().join('');
    return palavra.toLowerCase() === palavraInversa.toLowerCase();
}

console.log(verificacaoPalindromo('arara'));
console.log(verificacaoPalindromo('Rato'));



// 4.Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else)
//  para comparar os valores e determinar o maior. Imprima o maior valor no console.

function comparacaoNumerica(primeiroNumero, segundoNumero, terceiroNumero){
    let maiorNumero = primeiroNumero;

    if(segundoNumero > maiorNumero){
        maiorNumero = segundoNumero;
    } if(terceiroNumero > maiorNumero){
        maiorNumero = terceiroNumero;
    }

    return `O maior número é: ${maiorNumero}`;
}

console.log(comparacaoNumerica(55, 25, 44));

*/

// 5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);



