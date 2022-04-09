// Classe Pilha:
module.exports = class Stack {

    // Função construtora de Objetos:
    constructor() {

        // contador que armazena o topo da pilha
        this.count = 0;

        // Objeto repreentando os elementos da pilha 
        this.items = {};

    }

    // Método para inserção do elemento no ultimo topo da pilha :
    push(element) {

        // adicionando elemento no item do contador:
        this.items[this.count] = element;

        // atualizando o topo da pilha:
        this.count++
    }

    // Método que retorna o tamanho da pilha
    size() {

        return this.count()

    }

    // Método que retorna se a pilha esta vazia:
    isEmpty() {

        return this.count === 0

    }

    // Método que remove o elemento do topo da pilha:
    pop() {

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

    // Método que retorna o elemento no topo da pilha:
    peek() {

        // Verificando se a pilha tem itens
        if (this.isEmpty()) {

            // Caso a pilha esteja vazia retorna undefined
            return undefined;
        }

        return this.items[this.count - 1]

    }

    // Método que limpa a pilha:
    clear() {

        this.items = {};
        this.count = 0;
        
    }

    // Método que retorna os elementos da pilha em formato string:
    toString() {

        // Verificando se a pilha tem itens
        if (this.isEmpty()) {

            // Caso a pilha esteja vazia retorna uma string vazia:
            return '';
        }
        
        // variavel recebendo o primeiro valor da pilha:
        let objString = `${this.items[0]}`;

        // percorrendo os elementos da pilha:
        for ( let i = 1; i < this.count; i++ ) {

            // a variavel recebe sempre o seu valor anterior junto com o novo:
            objString = `${ objString }, ${ this.items[i] }`;

        }

        return objString

    }

}