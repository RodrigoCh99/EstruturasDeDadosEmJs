var Stack = require('../estruturas_de_dados/Stack.js');

// Função que converte decimal para binário aplicando uma estrutura de Pilha:
function decimalToBinary(decNumber) {

    // objeto armazenando a estrutura de pilha:
    const remStack = new Stack();

    // variavel recebendo o numero inserido pelo usuario:
    let number = decNumber;

    // variavel que armazenará o resto da divisão:
    let rem;

    // variavel que armazenará a resposta em formato string:
    let binaryString = '';

    
    while(number > 0) {

        // variavel recebendo o resto arredondado da divisão:
        rem = Math.floor(number % 2)

        // objeto pilha empilhando os valores de rem:
        remStack.push(rem)

        // number recebendo o aredondado da divisão do numero por 2
        number = Math.floor(number / 2)

    }

    // se a pilha não estiver vazia:
    while(!remStack.isEmpty()) {

        // variavel recebe a sim mesma mais os elementos pilha do topo até a base:
        binaryString += remStack.pop().toString();

    }

    // retornando resposta ao usuario
    return binaryString

}

console.log('O numero 300 é igual a -> ', decimalToBinary(300))