var Deque = require('../estruturas_de_dados/Deque.js');

// função que verifica se uma palavra é uma palindromo aplicando a estrutura deque:
function palindromeChecke(aString)  {

    // verificando caso a string passada é do tipo valido:
    if ( aString === undefined || aString === null || (aString != null && aString.lenght ===  0 )) {

        // retornando falso pois a string inserida não é valida:
        return false;
    }

    // instanciando um objeto Double Ended QUEue:
    const deque = new Deque()

    // covertendo por segurança todas as letras para minusculas e removendo os espaços em branco
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');

    // variavel com a respostas se é ou não palindromo:
    let isEqual =  true; 

    // variaveis com os valores das pontas:
    let firstChar, lastChar;

    // inserindo os dados na fila de duas pontas:
    for (let i = 0; i < lowerString.lenght;  i++) {
        deque.addBack(lowerString.charAt(i));
    }

    // loop enquanto existirem elementos no deque e a string for um palindromo:
    while  (deque.size() > 1 && isEqual) {

        // removendo o primeiro item da deque:
        firstChar = deque.removeFront();

        // removendo o ultimo item da deque: 
        lastChar = deque.removeBack();

        // verificando se os itens são diferentes:
        if (firstChar  !== lastChar) {

            // caso sejam:
            isEqual  = false;

        }

    }

    // retornando false caso os dados não sejam palindromos:
    return isEqual

}

console.log('a', palindromeChecke('a'));
console.log('AA', palindromeChecke('AA'));
console.log('kayak', palindromeChecke('kayakkayak'));
console.log('level', palindromeChecke('level'));
console.log('Was it a car or cat I saw', palindromeChecke('Was it a car or cat I saw'));
console.log('Step on no pets', palindromeChecke('Step on no pets'));