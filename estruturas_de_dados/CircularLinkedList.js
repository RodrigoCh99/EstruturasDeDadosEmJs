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

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = Node(element);
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

    















}