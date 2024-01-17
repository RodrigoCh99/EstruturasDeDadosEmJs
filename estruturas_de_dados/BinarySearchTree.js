//import { Compare, defaultCompare } from "./SortedLinkedList";

var SortedLinkedListFile = require('../estruturas_de_dados/SortedLinkedList.js');
var defaultCompare = SortedLinkedListFile.defaultCompare;
var Compare = SortedLinkedListFile.Compare;


// Classe Node ou Nó para uma arvore bináriade busca
class Node {

    // Função construtora de objetos
    constructor(key) {

        // parametro responsável por armazenar o valor do Nó
        this.key = key;

        // parametro responsável por armazenar uma referência ao node a esquerda
        this.left = null;

        // parametro responsável por armazenar uma referência ao node a direita
        this.right = null;

    }

}

// Classe de arvore binária de busca
class BinarySearchTree {

    // Função construtora de objetos
    constructor(compareFn = defaultCompare) {

        // parametro armazenando a função de comparação entre objetos que será usada na clase
        this.compareFn = compareFn;

        // parametro armazenando a raiz da arvore
        this.root = null;

    }

    // Método responsável por inserir nós na arvore
    insert(key) {

        // verificando se a arvore já possui uma raiz
        if (this.root == null) {

            // se não possuir atribui esse nó como raiz
            this.root = new Node(key);

        } else {

            // caso contrário chama um método auxiliar que decide a melhor posição para inserir o nó na árvore
            this.insertNode(this.root, key);

        }

    }

    // Método auxiliar ao método insert que decide a posição onde o nó deve ser inserido
    insertNode(node, key) {

        // verificando se a key nova é menor que a key do nó atual
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {

            // caso ela seja verifica-se se o nó atual não possui uma referencia a esquerda
            if (node.left == null) {

                // caso ele não tenha inserimos um novo nó com a key inserida
                node.left = new Node(key);

            } else {

                // caso ele tenha um nó a esquerda repetimos o processo para esse nó a esquerda
                this.insertNode(node.left, key);

            }

        } else {

            // caso a nova key nova seja maior que a key do nó atual
            // verifica-se se o nó atual não possui uma referencia a direita
            if (node.right == null) {

                // caso ele não tenha inserimos um novo nó com a key inserida
                node.right = new Node(key);

            } else {

                // caso ele tenha um nó a direita repetimos o processo para esse nó a direita
                this.insertNode(node.right, key);

            }

        }

    }

    // Método que recebe uma função e aplica ela em todas as chaves de todos os nós em ordem
    inOrderTraverse(callback) {

        // chamando método auxliar que aplica o percurso em ordem crescente na árvore para aplicar a função
        this.inOrderTraverseNode(this.root, callback);

    }

    // método auxiliar que realiza o percurso inOrder
    inOrderTraverseNode(node, callback) {

        // verificando se o nó inserido é diferente de vazio
        if (node != null) {

            // recursão na função passando o nó a esquerda desse
            this.inOrderTraverseNode(node.left, callback);

            // aplicando a função na key do nó
            callback(node.key);

            this.inOrderTraverseNode(node.right, callback);

        }


    }

    // Método que recebe uma função e aplica ela em todas as chaves de todos os nós pré ordem
    preOrderTraverse(callback) {

        this.preOrderTraverseNode(this.root, callback);

    }

    // método auxiliar que realiza o percurso preOrder
    preOrderTraverseNode(node, callback) {

        // verificando se o nó inserido é diferente de vazio
        if (node != null) {

            // aplicando a função na key do nó
            callback(node.key);

            // recursão na função passando o nó a esquerda desse
            this.preOrderTraverseNode(node.left, callback);

            // recursão na função passando o nó a direita desse
            this.preOrderTraverseNode(node.right, callback);

        }

    }

    // Método que recebe uma função e aplica ela em todas as chaves de todos os nós pos ordem
    postOrderTraverse(callback) {

        this.postOrderTraverseNode(this.root, callback);

    }

    // método auxiliar que realiza o percurso postOrder
    postOrderTraverseNode(node, callback) {

        if (node != null) {

            // recursão na função passando o nó a esquerda desse
            this.postOrderTraverseNode(node.left, callback);

            // recursão na função passando o nó a direita desse
            this.postOrderTraverseNode(node.right, callback);

            // aplicando a função na key do nó
            callback(node.key);
        }

    }

    // Método que encontra o valor minimo da árvore
    min() {

        return this.minNode(this.root);

    }

    // Método auxiliar que encontra o valor minímo dentro de uma árvore binária a partir de um nó
    minNode(node) {

        // armazenando o nó atual em uma variável
        let current = node;

        // enquanto o nó não estiver vazio e o nó a esquerda dele também não
        while (current != null && current.left != null) {

            // repita o processo para o nó a esquerda desse
            current = current.left;

        }

        // quando encontrar um nó cuja esquerda seja null, esse é o nó minimo
        return current;

    }

    // Método que encontra o valor máximo da árvore
    max() {

        return this.maxNode(this.root);

    }

    // Método auxiliar que encontra o valor máximo dentro de uma árvore binária a partir de um nó
    maxNode(node) {

        // armazenando o nó atual em uma variável
        let current = node;

        // enquanto o nó não estiver vazio e o nó a direita dele também não
        while (current != null && current.right != null) {

            // repita o processo para o nó a direita desse
            current = current.right;

        }

        // quando encontrar um nó cuja direita seja null, esse é o nó minimo
        return current;

    }

    // Método que pesquisa keys especificas em uma árvore binária e retorna true ou false
    search(key) {
        
        return this.searchNode(this.root, key);

    }

    // Método auxiliar que pesquisa uma key com base em um nó da árvore binária e retorna true ou false
    searchNode(node, key) {

        // verifica se o nó está vazio
        if(node == null) {

            // caso esteja retorna false pois é impossível encontrar null
            return false;

        }

        // verificando se a key procurada é menor que key do node atual
        if ( this.compareFn(key, node.key) === Compare.LESS_THAN ) {

            // caso seja menor realiza uma recursão para o filho a esquerda
            return this.searchNode(node.left, key);

        // verificando se a key procurada é maior que key do node atual    
        } 
        
        if ( this.compareFn(key, node.key) === Compare.BIGGER_THAN ) {

            // caso seja maior realiza uma recursão para o filho a direita
            return this.searchNode(node.right, key);

        } 

        // caso não seja nem menor nem maior é por que é a key procurada
            return true;

    }

    // Método que delete uma key da árvore
    remove(key) {

        this.removeNode(this.root, key);

    }

    // Método auxiliar que recebe um nó de partida e uma key e busca e remove o node com a key inserida
    removeNode(node, key) {

        // se o nó estiver vazio retona null pois não foi possível remover esse nó
        if (node == null) {

            return undefined;

        }

        // se a key do nó procurado for menor que a key do nó de partida atual
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {

            // recursão para o filho a esquerda do nó de partida atual
            node.left = this.removeNode(node.left, key);

            // retornando o node atual
            return node;
        } 

        // se key do nó procurado for maior que a key do nó de partida atual
        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {

            // recursão para o filho a direita do nó de partida atual
            node.right = this.removeNode(node.right, key);
            
            // retornando o node atual
            return node;

        }

        /*
            CHEGOU AQUI!

                Significa que key = node.item, levando a  3 situações:

                    1ª] => o node é uma folha.

                    2ª] => o node tem um filho.

                    3ª] => o node tem dois filhos.

        */

        // caso #1
        if (node.left == null && node.right == null) {

            // caso o node não possua filhos
            // definindo o node como undefined
            node = undefined;

            // retornando ele para que seja alterado no node pai
            return node;

        }

        // caso #2
        if(node.left == null) {

            // caso o node não possua um filho a esquerda
            // atribuimos o valor do filho a direita ao node de partida atual
            node = node.right;

            // retornando o novo node 
            return node;

        } 
        
        if (node.right == null) {

            // caso o node não possua um filho a direita
            // atribuimos o valor do filho a esquerda ao node de partida atual
            node = node.left;

            //retornando o novo node
            return node;

        }

        // caso 3
        // atribuindo a menor key da sub árvore do nó a direita a uma variavel auxiliar
        const aux = this.minNode(node.right);

        // atribuindo a key do menor nó ao menor ao nó de partida atual
        node.key = aux.key;

        node.right = this.removeNode(node.right, aux.key);

        // retornando o nó alterado
        return node;

    }

}

const tree = new BinarySearchTree();

// root
tree.insert(11);

// filhos
tree.insert(7);
tree.insert(15);
tree.insert(5);


tree.insert(3);
tree.insert(9);
tree.insert(8);


tree.insert(10);
tree.insert(13);
tree.insert(12);

tree.insert(14);
tree.insert(20);
tree.insert(18);

tree.insert(25);
tree.insert(6);

const printNode = (value) => console.log(value);

console.log('inOrder');
tree.inOrderTraverse(printNode);
console.log('preOrder');
tree.preOrderTraverse(printNode);
console.log('postOrder');
tree.postOrderTraverse(printNode);

console.log('=-=-=-=-=-=-=-')

console.log(tree.min());
console.log(tree.max());

console.log('=-=-=-=-=-=-=-')

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.')
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.')

console.log('=-=-=-=-=-=-=-')
console.log('REMOÇÃO')
console.log('=-=-=-=-=-=-=-')
tree.remove(6)
tree.inOrderTraverse(printNode);
console.log('=-=-=-=-=-=-=-')
console.log('REMOÇÃO')
console.log('=-=-=-=-=-=-=-')
tree.remove(5)
tree.inOrderTraverse(printNode);
console.log('=-=-=-=-=-=-=-')
console.log('REMOÇÃO')
console.log('=-=-=-=-=-=-=-')
tree.remove(15)
tree.inOrderTraverse(printNode);
