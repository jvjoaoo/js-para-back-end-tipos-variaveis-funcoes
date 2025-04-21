// Funções com parâmetros / argumentos
// Return / -> Processamento

function exibeInfosEstudante(nome, nota){
    return `O nome é ${nome} e a nota é ${nota}`
}

//console.log(exibeInfosEstudante('Carlos Gomes', 7))
//console.log(exibeInfosEstudante('Thiago', 9.5))

// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
   // execução (ou chamada) da função
   somarDoisNumeros(2, 2);
   
   // atribuindo o retorno de uma função a uma variável
   const resultado = somarDoisNumeros(2, 2);
   //console.log(resultado);


   function saudacao(nome) {
    return `Olá, ${nome}!`;
    }

    const mensagem = saudacao("Gabriel");
    console.log(mensagem);