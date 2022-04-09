// Classe deque ou fila de duas pontas :
module.exports = class Deque {

    // Função construtora de Objetos:
    constructor() {

        // propriedade que ajuda a controlar o tamanho da fila de duas pontas:
        this.count = 0

        // propriedade que ajuda a controlar o primeiro elemento da fila de duas pontas:
        this.lowestCount = 0;

        // propriedade que armazena os itens da fila de duas pontas:
        this.items = {};

    }

    // * Métodos padronizados para filas:

    // Método que verifica se a fila de duas pontas está vazia:
    isEmpty() {

        // retorna [ true ] se o contador e o primeiro elementos forem 0:
        return this.count - this.lowestCount === 0

    }

    // Método que retorna a quantidade de elementos na fila de duas pontas:
    size() {

        // o tamanho da fila é igual ao contador menos o 1º elemento
        return this.count - this.lowestCount;

    }

    // Método que limpa a fila de duas pontas:
    clear() {

        // transformando as propriedades de volta nos valores iniciais:

        this.count = 0;

        this.lowestCount = 0;

        this.items = {};

    }

    // Método que retorna os elementos da fila de duas pontas em formato string:
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

    // ! Pelo fato da deque permitir inserir e remover elemntos das duas extremidades
    // ! Ela possuirá alguns métodos das classes Pilha e Fila com outros nomes:

    // Método responsavel por inserir elementos no inicio da fila:
    addFront(element) {

        // se a fila estiver vazia retorna a função de adicionar elemento no final da fila:
        if (this.isEmpty()) {

            return this.addBack(element);

        // caso algum elemento tenha sido removido do inicio:
        } else if ( this.lowestCount > 0 ) {
           
            this.lowestCount--;

            this.items[this.lowestCount] = element;

        } else {

            for ( let i = this.count; i > 0; i++ ) {

                this.items[i] = this.items[i - 1];

            }

            this.count++;

            this.lowestCount = 0;

            this.items[0] = element;

        }

    }

    // Método responsavel por inserir elementos no fim fila:
    addBack(element) {

        // item na posição contador recebe o elemento:
        this.items[this.count] = element;

        this.count++;

    }

    // Método responsável por remover elementos do inicio ds fila:
    removeFront() {

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

    // Método que remove o elemento no fim da fila:
    removeBack() {

        // Verificando se a pilha tem itens
        if (this.isEmpty()) {

            // Caso a pilha esteja vazia retorna undefined
            return undefined;
        }

        // Diminuição do topo da pilha:
        this.count--;

        // Constante de resultado armazenando o tpo da pilha:
        const result = this.items[this.count];

        delete this.items[this.count];

        // retornando o resultado para o usuario:
        return result;

    }

    // Método que retorna o elemento na frente da fila:
    peekFront() {

        // se a fila estiver vazia retorna indefinido:
        if (this.isEmpty()) {

            return undefined
        }

        return this.items[this.lowestCount]
    }

    // Método que retorna o elemento no fim da fila:
    peekBack() {

        // Verificando se a pilha tem itens
        if (this.isEmpty()) {

            // Caso a pilha esteja vazia retorna undefined
            return undefined;
        }

        return this.items[this.count - 1]

    }

}