// Importando classes de um outro módulo js:
var DoublyLinkedListFile = require('../estruturas_de_dados/DoublyLinkedList.js');

// Instanciando essas classes neste módulo:
var DoublyNode = DoublyLinkedListFile.DoublyNode;
var defaultEquals = DoublyLinkedListFile.defaultEquals;
var DoublyLinkedList = DoublyLinkedListFile.DoublyLinkedList;

// Classe lista encadeada empilhada:
class StackLinkedList extends DoublyLinkedList {

    // Função construtora de Objetos:
    constructor() {

        // Chama o construtor da classe pai primeiro
        super();

        // salvando itens da lista como variavel:
        this.items = new DoublyLinkedList();

    }

    // Método para inserção do elemento no topo da pilha :
    push(element) {
        this.items.push(element);
    }
    
    // Método que remove o elemento do topo da pilha:
    pop() {

        // se a lista está vazia
        if (this.isEmpty()) {

            // retorna indefinido
            return undefined;
        }

        // se a lista tem algum item, o ultimo é removido pos está empilhada
        return this.items.removeAt(this.size() - 1);
    }

    // Método que retorna o elemento no topo da pilha:
    peek() {

        // se a lista está vazia
        if(this.isEmpty()) {

            return undefined;

        }

        // se não estiver
        // pega o ultimo elemento da lista usando um método a baixo:
        return this.items.getElementAt(this.size() - 1).element;
    }

    // Método que retorna se a lista está vazia:
    isEmpty() {
        return this.items.isEmpty();
    }

    // Método que retona a quantidade de itens na lista:
    size() {
        return this.items.size();
    }

    // Método para limpar a lista:
    clear() {
        this.items.clear();
    }

    // Método para converter a lista em string para visualização melhorada
    toString() {
        return this.items.toString();
    }
}

// Criando uma instância de StackLinkedList
var stack = new StackLinkedList();

// Testando os métodos da pilha
console.log('Pilha Inicial: ', stack.toString());

// Empilhando elementos
stack.push(10);
stack.push(20);
stack.push(30);
console.log('Pilha após o empilhamento: ', stack.toString());

// Desempilhando elemento
console.log('Desempilhando: ', stack.pop());
console.log('Pilha após o desempilhamento: ', stack.toString());

// Verificando o elemento no topo da pilha
console.log('Elemento no topo da pilha: ', stack.peek());

// Verificando se a pilha está vazia
console.log('A pilha está vazia? ', stack.isEmpty());

// Obtendo o tamanho da pilha
console.log('Tamanho da pilha: ', stack.size());

// Limpando a pilha
stack.clear();
console.log('Pilha após a limpeza: ', stack.toString());