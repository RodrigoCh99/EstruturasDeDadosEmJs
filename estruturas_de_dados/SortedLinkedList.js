// Importando classes de um outro módulo js:
var LinkedListFile = require('../estruturas_de_dados/LinkedList.js');

// Instanciando essas classes neste módulo:
var Node = LinkedListFile.Node;
var defaultEquals = LinkedListFile.defaultEquals;
var LinkedList = LinkedListFile.LinkedList;

// Objeto que mapeia comparação
const Compare = {

    // se 0 1º for for menor retorna -1
    LESS_THAN: -1,

    // se 0 1º for maior retorna 1
    BIGGER_THAN: 1
};

// Função que compara dois valores
function defaultCompare(a, b) {

    if (a === b) {

        // se os valores forem iguais retorna 0:
        return 0;
    }

    // se os valores forem diferentes retorna -1 ou 1 com base na comparação
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Classe de lista encadeada ordenada:
class SortedLinkedList extends LinkedList {

    // Função construtora de Objetos:
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {

        // Importanto a função de comparação da classe LinkedList
        super(equalsFn);

        // função de comparação para ordenação que pode ser definida pelo usuário:
        this.compareFn = compareFn;
    }

    // Método que adiciona elementos de uma posição especifica da lista encadeada ordenada:
    insert(element, index=0) {

        // Caso a lista esteja sem elementos
        if (this.isEmpty()) {

            // executa o método insert da classe mãe no indice 0:
            return super.insert(element, 0);
        }
        
        // pegando a posição correta para  elemento com base em uma método novo:
        const pos = this.getIndexNextSortedElement(element);

        // executa o método insert da classe mãe no indice correto para o valor de element
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {

        // criando a variavel corrente com o valor do primeiro element
        let current = this.head; 

        // iterador
        let i = 0;

        // Iterando pela lista até encontrar o local para element ou até que todos os elementos sejam percorridos
        for (; i < this.size() && current; i++) {

            // usando a função de comparação criada para comparar o element com o valor atual que estamos percorrendo na lista
            const comp = this.compareFn(element, current.element);

            // se a comparação retornar que o valor de element é menor:
            if (comp === Compare.LESS_THAN) {

                // retornamos o index encontrado pois essa é a posição onde o element deve ser inserido:
                return i;
            }

            current = current.next;

        }

        // caso não encontre um valor maior retorna o i pois é o ultimo index da lista
        return i;

    }
}

/*
// Criando uma instância de SortedLinkedList
var sortedList = new SortedLinkedList();

// Testando o método insert
console.log('Lista Inicial: ', sortedList.toString());

// Inserindo elementos na lista ordenada
console.log('Inserindo 30: ', sortedList.insert(30));
console.log('Lista Atual: ', sortedList.toString());

console.log('Inserindo 10: ', sortedList.insert(10));
console.log('Lista Atual: ', sortedList.toString());

console.log('Inserindo 50: ', sortedList.insert(50));
console.log('Lista Atual: ', sortedList.toString());

console.log('Inserindo 20: ', sortedList.insert(20));
console.log('Lista Atual: ', sortedList.toString());

console.log('Inserindo 40: ', sortedList.insert(40));
console.log('Lista Atual: ', sortedList.toString());
*/

module.exports = {
    Compare: Compare,
    defaultCompare: defaultCompare,
    SortedLinkedList: SortedLinkedList,
}