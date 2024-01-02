// Importando classes de um outro módulo js:
var LinkedListFile = require('../estruturas_de_dados/LinkedList.js');

// Instanciando essas classes neste módulo:
var Node = LinkedListFile.Node;
var defaultEquals = LinkedListFile.defaultEquals;
var LinkedList = LinkedListFile.LinkedList;


// Classe nó para a Lista Duplamente Encadeada:
class DoublyNode extends Node{

    // Função construtora de Objetos:
    constructor(element,  next, prev) {

        // Instanciando os atributos com os valores da classe mãe:
        super(element, next);

        // Intanciando o novo atributo com  o valor que será inserrido pelo usuário:
        this.prev = prev;
    }
}

// Classe Lista duplamente encadeada:
class DoublyLinkedList extends LinkedList {

    // Função construtora de Objetos:
    constructor(equalsFn = defaultEquals) {

        // Instanciando o atributo comm ovalor da classee mãe:
        super(equalsFn);

        // novo atributo, fim da lista  encadeada:
        this.tail = undefined;

    }

    // método que insere elementos no final da lista:
    push(element) {

        // instanciando um objeto da classe DoublyNode com o elemento inserido no método:
        const node = new DoublyNode(element);

        // verificando se a lista está vazia
        if(this.head == null) {

            // atribuindo o nvo nó tanto ao atributo inicio quanto o atributo fim:
            this.head = node;
            this.tail = node; 

        }
        // caso não esteja
        else {

            // fazendo o  ultimo item referenciar o novo item:
            this.tail.next = node;

            // fazendo o novo item referenciar o ultimo atual:
            node.prev = this.tail;

            // fazendo o atributo de ultimo referenciar o novo item:
            this.tail = node;
        }

        // atualizando o atributo contador:
        this.count++;

    }

    // Método que insere um elemento em qualquer posição:
    insert(element, index) {

        // verificação se o index é válido:
        if (index >= 0 && index <= this.count) {

            // criando uma varivael node com o elemento inserido:
            const node = new DoublyNode(element);

            // crinado uma variavel que armazena o início da lista:
            let current = this.head;

            // caso o index inserido seja zero:
            if (index === 0) {

                // verificando se já existe algum item na primeira posição:
                if (this.head == null ) {

                    // caso não tenha atribui o node inserido como 1ª posição:
                    this.head = node;

                    // caso não tenha atribui o node inserido como ultima posição:
                    this.tail = node;

                } 
                // caso já exista um item na posição inicial:
                else {

                    // next do nó atual passa a apontar para o item que é atualmente o primeiro:
                    node.next = this.head;

                    // prev do 1º item passa a apontar para o novo nó:
                    current.prev = node; 

                    // atributo que aponta para o primeiro item começa a apontar para o novo nó:
                    this.head = node;
                }

            } 
            // Caso o index inserido não seja o ultimo:
            else if (index == this.count) {

                // variável armazenando o atual ultimo item da lista:
                let current = this.tail;

                // atribuindo o next do ultimmo item atual ao novo item inserido:
                current.next = node; 

                // atriibuindo o prev do novo nó ao item que anteriormeente era o ultimo:
                node.prev = current;

                // atualizando o atributo de ultimo item:
                this.tail = node;

            }
            // caso o index inseido nã seja nem o 1º nem o ultimo:
            else {

                // pegando o elemento de index anterior da lista:
                const previous = this.getElementAt(index - 1);

                // pegando o item que está na posição desejada:
                current = previous.next; 

                // fazendo o novo nó apontar em next para o nó atual
                node.next = current;

                // fazendo o item anterior apontar em next para o novo nó
                previous.next = node;

                // fazendo o próximo item em prev apontar para o novo nó
                current.prev = node;

                // fazendo o noovo nó apontar em prev para o nó antterior
                node.prev = previous;

            }
            // incrementando o contador de itens da lista
            this.count++;

            // retornando uma confirmação que o insert funcionou:
            return true;

        } 

        // caso o index inserido seja invalido informa ao usuário que o insert não foi feito
        return false;

    }

    // Método que remove um elemento em qualquer posição:
    removeAt(index) {

        // verificando se o index inserido é válido:
        if (index >= 0 && index <= this.count) {

            // instanciando uma variavel com o item inicial da lista
            let current = this.head;

            // caso o index seja 0
            if (index === 0) {
                
                // atualizando o atributo de primiro item para apontar para o segundo
                this.head = current.next;

                // caso só exista um item na lista e queiramos remover ele:
                if (this.count === 1) {

                    // o  valor do atributo ultimmo item é atalizado:
                    this.tail = undefined;

                }
                // caso queira remover o item 0 mas ele não seja o unico:
                else {

                    // atualiza o valor do abributo de item final:
                    this.head.prev = undefined;

                }

            } 

            // caso o index seja o ultimm item:
            else if (index === this.count - 1) {

                // vaiavel de iteração recebe o ultimo item:
                current = this.tail;

                // atualiiando o valor do aatributo de ultimo item com o valor do item anterior ao ultimo:
                this.tail = current.prev;

                // fazendo o novo ultimo apontar para o nada
                this.tail.next = undefined;

            }

            // caso o index não seja nem o primeiro nem o ultimo:
            else {

                // pegando o elemento do index inserido:
                current = this.getElementAt(index);

                // instanciando uma vvariavel com o item anterior ao alvo:
                const previous = current.prev;
                
                // liga o next do item anterior com o prev item posterior para pular (e remover) o item alvo:
                previous.next = current.next;

                // liga o prev do item posterior com o item anterior para pular (e remover) o item alvo
                current.next.prev = previous;

            }

            // atualizando o atributo contador:
            this.count--;

            // retornando o elemento remmovido:
            return current.element;

        } 

        // retornando undefined caso o index seja invalido:
        return undefined;

    }

    // método que retorna o primeiro item da lista:
    getHead() {
        super.getHead;
    }

    // Método que retorna o ultimo item da lista
    getTail() {

        // utilizando o atributo:
        return this.tail;

    }

    // limpando os itens da lista
    clear()  {

        // rodando o clear da classe mãe:
        super.clear();

        // limpando o atributo referencia ao ultimo item:
        this.tail =  undefined;

    }

    toString() {

        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;

        while (current != null) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }

        return objString;
        
    }

    // visualização da lista de trás para frente:
    inverseToString() {

        // verificando caso o ultimo item seja nulo
        if (this.tail == null) {

            // caso seja retorna uma string vazia
            return '';
        }

        // variavel recebendo o ultimo valor atual da fila:
        let objString = `${this.tail.element}`;

        // variavel recebendo o penultimo valor atual da fila:
        let previous = this.tail.prev;

        // enquanto o valor anterior não for indefinido:
        while (previous != null) {
        
            // atualiza a string formmatada:
            objString = `${objString},${previous.element}`;

            // atualiza o valor do item anterior no loop
            previous = previous.prev;
        }

        // retorna a string formatada:
        return objString;
    }

}

/*
const list = new DoublyLinkedList();

console.log('push element 15');

list.push(15);
//console.log(`VISUALIZAÇÃO:\nHEAD ==> ( ${list.head} )\nTAIL ==> ( ${list.tail} )\nCOUNT ==> ( ${list.count} )  `)

console.log(
    'list.toString() => ', list.toString() 
);
console.log('list.inverseToString() => ', list.inverseToString());
console.log('push element 16');
list.push(16);
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('push element 17');
list.push(17);
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('insert element 13 pos 0 => ', list.insert(13, 0));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('insert element 18 pos 4 => ', list.insert(18, 4));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('insert element 14 pos 1 => ', list.insert(14, 1));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('list.removeAt(0) => ', list.removeAt(0));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('list.removeAt(list.size() - 1) => ', list.removeAt(list.size() - 1));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('list.removeAt(1) => ', list.removeAt(1));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('remove element 16 => ', list.remove(16));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('remove element 14 => ', list.remove(14));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());

console.log('remove element 17 => ', list.remove(17));
console.log('list.toString() => ', list.toString());
console.log('list.inverseToString() => ', list.inverseToString());
*/

module.exports = {
    DoublyNode: DoublyNode,
    defaultEquals: defaultEquals,
    DoublyLinkedList: DoublyLinkedList
}