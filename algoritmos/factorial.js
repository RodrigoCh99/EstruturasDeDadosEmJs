function fatorialIterative(number) {

    if (number < 0) return undefined

    let total = 1

    for (i=number; i > 0; i--) {

        total = total * i

    }

    return total

}

function factorialRecursive(n) {

    // visualização da chamada da função no console
    console.trace()

    // se o numero inserido na função for 1 ou 0 ele retorna 1
    if (n === 1 || n === 0) {

        return 1;

    }

    // caso contrário ele chama a própria função passando o numero atual multiplicado pelo numero anterior
    return n * factorialRecursive(n - 1);

}

/*
var resposta = fatorialIterative(5);
console.log(resposta);
console.log(factorialRecursive(5));
*/