// Importando classes de um outro módulo js:
var LinkedListFile = require('../estruturas_de_dados/LinkedList.js');

// Instanciando essas classes neste módulo:
var Node = LinkedListFile.Node;
var defaultEquals = LinkedListFile.defaultEquals;
var LinkedList = LinkedListFile.LinkedList;

//  
class CircularLinkedList extends LinkedList {

    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node; 
        } else {
            current = this.getElementAt(this.size() - 1);
            current.next = node;
        }
        node.next = this.head;
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index-1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index-1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }

        return undefined;
    }

}

/*
const list = new CircularLinkedList();

console.log('push element 15');
list.push(15);
console.log('list.toString() => ', list.toString());

console.log('push element 16');
list.push(16);
console.log('list.toString() => ', list.toString());

console.log('insert element 14 pos 0 => ', list.insert(14, 0));
console.log('list.toString() => ', list.toString());

console.log('insert element 14.5 pos 1 => ', list.insert(14.5, 1));
console.log('list.toString() => ', list.toString());

console.log('insert element 17 pos 4 => ', list.insert(17, 4));
console.log('list.toString() => ', list.toString());

console.log('list.removeAt(0) => ', list.removeAt(0));
console.log('list.toString() => ', list.toString());

console.log('list.removeAt(1) => ', list.removeAt(1));
console.log('list.toString() => ', list.toString());

console.log('list.removeAt(2) => ', list.removeAt(2));
console.log('list.toString() => ', list.toString());

console.log('list.indexOf(14.5) => ', list.indexOf(14.5));
console.log('list.indexOf(16) => ', list.indexOf(16));
*/
