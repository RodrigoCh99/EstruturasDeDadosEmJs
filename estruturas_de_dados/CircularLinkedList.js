// Importando classes de um outro módulo js:
var LinkedListFile = require('../estruturas_de_dados/LinkedList.js');

// Instanciando essas classes neste módulo:
var Node = LinkedListFile.Node;
var defaultEquals = LinkedListFile.defaultEquals;
var LinkedList = LinkedListFile.LinkedList;

// Classe lista encadeada circular
class CircularLinkedList extends LinkedList {

    // Função construtora de Objetos:
    constructor(equalsFn = defaultEquals) {

        // Importanto a função de comparação da classe LinkedList
        super(equalsFn);
    }

    // Método que adiciona elementos de uma posição especifica da lista ligada:
    insert(element, index) {

        // verifica se o index está dentro do intervalo:
        if (index >= 0 && index <= this.count) {

            // criando um Nó da classe Nó
            const node = new Node(element);

            // criando uma variavel que representa o funcionamento atual do head:
            let current = this.head;

            // caso o objetivo seja inserir o elemento na 1ª posição:
            if (index === 0) {

                // se a lista estiver vazia:
                if (this.head == null) {

                    // adicionando o novo elemento a head da classe
                    this.head = node;

                    // adicionando o próximo nó colo ele mesmo para fazer o circulo na primeira iteração:
                    node.next = this.head;
                
                } else {

                    // atribuindo o next do novo nó ao nó head atual:
                    node.next = current;

                    // pegando o nó no ultimo indice da lista atual
                    current = this.getElementAt(this.size() - 1);
                    
                    // atualizando a classe para o head apontar para o novo nó
                    this.head = node; 

                    // atualizando o ultimo elemento para apontar para o novo primeiro:
                    current.next = this.head;

                }
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

            this.count++;
            return true;

        }

        return false; 

    }

    // Método que remove elementos de uma posição especifica da lista encadeada circular:
    removeAt(index) {

        // verifica se o index está dentro do intervalo:
        if (index >= 0 && index < this.count) {

            // variavel corrente de head da lista:
            let current = this.head;

            // se o objetivo for remover o primeiro item da lista circular:
            if (index === 0) {

                // se só existir ele dentro da lista:
                if (this.size() === 1) {

                    // define o head da lista como indefinido
                    this.head = undefined;

                } else {

                    // caso não exista só um item na lista:
                    // variavel recebendo o head atual
                    const removed = this.head; 

                    // pega o ultimo elemento da lista e atribui a variavel corrente
                    // aqui é necessário usar size() - 1 senão ela vai suplicar o primeiro item
                    current = this.getElementAt(this.size() - 1);

                    // atribuindo head ao próximo elemento para acabar com a ligação com o elemento que queremos remover
                    this.head = this.head.next;

                    // apontado o next do ultimo item para o novo head:
                    current.next = this.head;

                    // salvando o elemento removido para retornar ele no futuro
                    current = removed;

                }

            } else {

                // não há necessidade de atualizar o ultimo elemento da lista circular.
                const previous = this.getElementAt(index - 1);

                // armazenando o que será removido
                current = previous.next; 

                // fazendo o nó aterior ao atual apontar para o posterior e não para o atual
                previous.next = current.next;

            }

            this.count--;
            return current.element

        }

        return undefined;

    }

}

/*
// Criando uma instância de CircularLinkedList
var circularList = new CircularLinkedList();

// Testando o método insert
console.log('Lista Inicial: ', circularList.toString());

// Inserindo elementos na lista circular
console.log('Inserindo 10 na posição 0: ', circularList.insert(10, 0));
console.log('Lista Atual: ', circularList.toString());

console.log('Inserindo 20 na posição 0: ', circularList.insert(20, 0));
console.log('Lista Atual: ', circularList.toString());

console.log('Inserindo 30 na posição 1: ', circularList.insert(30, 1));
console.log('Lista Atual: ', circularList.toString());

console.log('Inserindo 40 na última posição: ', circularList.insert(40, circularList.size()));
console.log('Lista Atual: ', circularList.toString());

// Testando o método removeAt
console.log('Removendo elemento na posição 0: ', circularList.removeAt(0));
console.log('Lista Atual: ', circularList.toString());

console.log('Removendo elemento na posição 1: ', circularList.removeAt(1));
console.log('Lista Atual: ', circularList.toString());

console.log('Removendo elemento na última posição: ', circularList.removeAt(circularList.size() - 1));
console.log('Lista Atual: ', circularList.toString());
*/


module.exports = {
    CircularLinkedList: CircularLinkedList
}