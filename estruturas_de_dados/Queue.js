// Classe fila:
module.exports = class Queue {

    // Função construtora de Objetos:
    constructor() {

        // propriedade que ajuda a controlar o tamanho da fila:
        this.count = 0;

        // propriedade que ajuda a controlar o primeiro elemento da fila:
        this.lowestCount = 0;

        // propriedade que armazena os itens da fila:
        this.items = {};

    }

    // Método responsavel por inserir elementos na fila:
    enqueue(element) {

        // item na posição contador recebe o elemento:
        this.items[this.count] = element;

        this.count++;

    }

    // Método responsável por remover elementos da fila:
    deque() {

        // se a fila estiver vazia retorna indefinido:
        if (this.isEmpty()) {

            return undefined
        }

        // variavel resposta recebe o o elemento na primeira posição de items
        const result = this.items[this.lowestCount];

        // remoção do primeiro elemento:
        delete this.items[this.lowestCount];

        this.lowestCount++

        // retona o item removido:
        return result

    }

    // Método que retorna o elemento na frente da fila:
    peek() {

        // se a fila estiver vazia retorna indefinido:
        if (this.isEmpty()) {

            return undefined
        }

        return this.items[this.lowestCount]
    }

    // Método que verifica se a fila está vazia:
    isEmpty() {

        // retorna [ true ] se o contador e o primeiro elementos forem 0:
        return this.count - this.lowestCount === 0

    }

    // Método que retorna a quantidade de elementos na fila:
    size() {

        // o tamanho da fila é igual ao contador menos o 1º elemento
        return this.count - this.lowestCount;

    }

    // Método que limpa a fila:
    clear() {

        // transformando as propriedades de volta nos valores iniciais:

        this.count = 0;

        this.lowestCount = 0;

        this.items = {};

    }

    // Método que retorna os elementos da fila em formato string:
    toString() {

        // se a fila estiver vazia retorna uma string vazia:
        if (this.isEmpty()) {

            return '';
        }

        // variavel recebendo o primeiro valor atual da fila:
        let objString = `${ this.items[this.lowestCount] }`

        // percorrendo os elementos da fila:
        for (let i = this.lowestCount + 1; i < this.count; i++) {

            // a variavel recebe sempre o seu valor anterior junto com o novo:
            objString = `${ objString }, ${ this.items[i] }`;

        }

        return objString;

    }

}