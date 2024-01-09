function fibonacciIterative(n) {

    // condições do fibonacci
    if (n < 1) return 0;
    if (n <= 2) return 1;

    // inicianlizando os dois primeiros valores como numeros definidos 
    let fibMinus2 = 0;
    let fibMinus1 = 1;

    // definindo o item atual com o valor inserido na função 
    let fibN = n;

    // iterar começando pelo 2 até o valor inserido
    for (let i = 2; i <= n; i++) {

        // atribuindo o valor atual como uma soma do valor anterior e do anterior do anterior
        fibN = fibMinus1 + fibMinus2;

        // atribuindo o valor anterior do anterior com o valor do anterior
        fibMinus2 = fibMinus1

        // atribuindo o valor do anterior com o valor do atual
        fibMinus1 = fibN;
    }

    // retornando o valor atual após o calculo
    return fibN;

}


function fibonacciRecursive(n) {

    // condição de parada quando o n é 0
    if (n < 1) return 0;

    // condição quando o n é 1 ou 2
    if (n <= 2) return 1;

    // recursão
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);

}


function fibonacciMemoization(n) {

    // cache dos resultados calculados
    const memo = [0, 1];

    const fibonacci = (n) => {

        // se o resultado ja tiver sido calculado anteriormente ele é devolvido
        if (memo[n] != null) return memo[n];

        // caso contrário, calcula-se o resultado e armazena ele no cache
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    };

    return fibonacci(n);

}

/*
console.log(fibonacciIterative(20));
console.log(fibonacciRecursive(20));
console.log(fibonacciMemoization(20));
*/