const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;

const notaTerceiroBi = -6;
const notaQuartoBi = Number.parseInt('5'); // convertendo uma string para um number do tipo inteiro
// const notaTeste = Number.parseFloat('4.3'); // EXEMPLO: convertendo uma string para um number do tipo flutuante



const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('A média é ' + total.toFixed(2));