const notaPrimeiroBi = 10;
const notaSegundoBi = 7;
const notaTerceiroBi = 7;
const notaQuartoBi = 7;

let mediaFinal = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (mediaFinal >= 7){
    mediaFinal += mediaFinal * 0.1;
}

//console.log(`A média é ${mediaFinal.toFixed(2)}`);


const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(resultado)