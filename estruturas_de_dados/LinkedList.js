// Classe nó para a linked list ou lista ligada:
module.exports = class Node {

    // Função construtora de Objetos:
    constructor(element) {

        // prorpiedade que controla o elemento do node:
        this.element = element

        // propriedade que aponta para o próximo nó na lista:
        this.next = undefined        
    }
}

// Função capaz de realizar a comparação entre dois objetos, importante caso o usuario não informe na LinkedList:
function defaultEquals(a, b) {

    return a === b;

}

// Classe lista ligada:
module.exports = class LinkedList {

    // Função construtora de Objetos:
    constructor(equalsFn = defaultEquals) {

        // propriedade que ajuda a controlar o tamanho da LinkedList:
        this.count = 0;

        // propriedade que armazena o primeiro item da LinkedList:
        this.head = null;

        // propriedade que armazena a função de comparação:
        this.equalsFn = equalsFn;

    }

    // Método que verifica adiciona um elemento no final da lista linkada:
    push( element ) {

        // instanciando um objeto da classe Node com o elemento inserido na classe:
        const node = new Node(element)

        // variavel que aponta para o item atual da lista:
        let current;

        // verificando se a lista está vazia:
        if ( this.head == null ) {

            this.head = node;

        } else {
            
            // armazenando o primeiro item da lista para fazer a iteração:
            current = this.head

            // até chegar ao ultimo a variavel corrente vai ser iterada
            while ( current.next != null ) {

                current = current.next

            }

            // atribuindo um novo elemento no next do ultimo atual:
            current.next = node

        }

        this.count++

    }

    // função que percorre a lista:
    getElementAt(index) {

        if (index >= 0 && index < this.count) {

            let node = this.head;

            for (let i = 0; i < index && node != null; i++) {

                node = node.next;

            }

            return node;

        }

        return undefined;

    }

    // Método que remove elementos de uma posição especifica da lista ligada:
    removeAt( index ) {

        // verifica se o index está dentro do intervalo:
        if (index >= 0 && index < this.count) {

            // variavel referente a um valor da lista começando do head:
            let current = this.head

            // remove o primeiro item:
            if (index === 0) {

                // head recebe null
                this.head = current.next;

            } else {

                // variavel que armazena o item anterior ao corrente:
                let previous = this.getElementAt(index - 1);

                // o item corrente recebe o próximo do atual
                current = previous.next;

                // o item seguinte ao anterior recebe o proxio do atual
                previsous.next = current.next

            }

            this.count--;

        }
        // caso index não esteja no intervalo:
        return undefined;

    }

    // Método que adiciona elementos de uma posição especifica da lista ligada:
    insert(element, index) {

        // verifica se o index está dentro do intervalo:
        if (index >= 0 && index <= this.count) {

            const node = new Node(element);

            // caso não o objetivo seja alterar o primeiro elemento:
            if(index === 0) {

                // variavel que vai armazenar o valor corrente da lista, iniciando do primeiro:
                const current = this.head;

                // atribuindo ao próximo do novo nó o valor do head atual:
                node.next = current;

                // novo head recebe o novo nó
                this.head = node;

            } else {

                // variavel que armazena o item anterior ao corrente:
                let previous = this.getElementAt(index- 1);

                // variavel corrente recebe o valor seguinte ao anterior:
                const current = previous.next;

                // o próximo do nó recebe o valor do item atual:
                node.next = current;

                // próximo do anterior recebe nó:
                previous.next = node;
                
            }

            // atualiza o comprimento da lista:
            this.count++;

            // confirma a inserção:
            return true;

        }

        // caso o index esteja fora do alcance 
        return false;

    }

    // Método que devolve a posição de um elemento:
    indexOf(element) {

        // variavel referente a um valor da lista começando do head:
        let current = this.head;

        for (let i = 0; i < this.count && current != null; i++) {

            if (this.equalsFn(element, current.element)) {

                return i;

            }

            current = current.next;

        } 

        return -1;

    }

    // Método que remove um item da lista ligada:
    remove(element) {

        const index = this.indexOf(element);

        return this.removeAt(index);

    } 
    
    // Método que retorna o comprimento da lista:
    size() {

        return this.count

    }

    // Método que retorna true ou false se a lista está vazia:
    isEmpty() {

        return this.size() === 0;

    }

    // Método que retorna o primeiro item da lista:
    getHead() {

        return this.head;

    }

    // Método que retorna os valores da lista em string:
    toString() {

        // se alista estiver vazia retorna uma string vazia:
        if (this.head == null) {

            return '';

        }

        // variavel recebendo o primeiro valor atual da fila:
        let objString = `${this.head.element}`;

        // variavel que aponta para o primeiro item da lista:
        let current = this.head.next;

        for (let i=0; i < this.size() && current != null; i++) {

            objString = `${objString},${current.element}`;
            
            current = current.next;

        }

        return objString;

    }

}