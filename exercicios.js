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

const mediaFinal = somaDasNotas / 4

if (mediaFinal > 5){
    console.log(`Nota: ${mediaFinal.toFixed(2)} Parabéns ${estudante}, você foi aprovado para o próximo ano letivo 😀 Desejamos a você boas festas!`)
} else {
    console.log(`Nota: ${mediaFinal.toFixed(2)} Quase lá ${estudante}, infelizmente você não foi aprovado para a próxima etapa ☹  mais sorte na próxima, desejamos boas festas!`)
}
