// Classe de conjunto finito:
class Set {

    // Função construtora de Objetos:
    constructor() {

        // propriedade que armazena os itens:
        this.items = {};

    }

    // Método que verifica a existencia de elemento no conjunto:
    has(element) {

        
        /* 
        OPÇÃO #1:
            retorna true se estiver e false caso não esteja no this.items
                - essa implementação é valida mas possui limitações 
                - essa implementação responde se o objeto tem a propriedade especificada ou não na cadeia do objeto
        */
        // return element in this.items;

        /* 
        OPÇÃO #2:
            etorna true se estiver e false caso não esteja no this.items
                - Essa implementação é menor intuitiva mas é melhor
                - Essa implementação responde se o objeto tem a propriedade especifica ou não dentro do próprio objeto ou não.
                - Essa implementação é mais abrangente e mais profunda 
        */
        return Object.prototype.hasOwnProperty.call(this.items, element);

    }

    // Método que adiciona elementos no conjunto:
    add(element) {

        // se não encontrar o elemento dentro do conjunto:
        if (!this.has(element)) {
        
            // atribui ele como chave e valor na propriedade items para facilitar a busca:
            this.items[element] = element;

            // confirma para o usuário:
            return true 
        }

        // retorna false caso o item já exista no conjunto
        return false 

    }

    // Método que remove elementos do conjunto:
    delete(element) {


        // se encontrar o elemento dentro do conjunto:
        if (this.has(element)) {

            // deleta ele a partir da chave 
            delete this.items[element];

            // retorna uma confirmação para o usuário
            return true 
        }

        // caso o elemento não exista no conjunto não retorna a confirmação para o usuário
        else return false;
    }

    // Método que limpa o conjunto deixando vazio como no início:
    clear() {

        // atribuindo um valor vazio a propriedade já existente
        this.items = {};
    }

    // Método que retorna a quantidade de elementos presente no conjunto:
    size() {

        /*
            O .JS POSSUI DIVERSAS FORMAS DE FAZER ISSO MAS ALGUMAS SÃO MELHORES QUE OUTRAS:

            OPÇÃO #1:
                controlar com uma propriedade de contador quantos itens tem no conjunto

            OPÇÃO #2:
                return object.keys(this.items).length
                    - usando a função keys obtemos um array com todos as keys assim podemos pegar o length dele e retornar
                    - esse código é melhor mas só funciona em versões especificas de cada navegador que já estão atualizadas no ECMAScript2015+
            OPÇÃO #3:
                verificação força bruta
                    - aqui foi implementado em força bruta considerando que é um estudo sobre comparação em .Js
                    - comparação em .Js é um tema complexo e que normalmente causa confusão em iniciantes.
        */

        let count = 0;

        // iterando pelas propriedades de items
        for(let key in this.items) {

            // verifica se essa propriedade é do objeto Set
            if (this.items.hasOwnProperty(key)) {

                // aumenta o contador toda vez que for confirmado
                count++;
            }
        }

        // retorna a quantidade encontrada
        return count;

    }

    // Método que retorna os elementos de um conjunto:
    values() {

        /*
            O .JS POSSUI DIVERSAS FORMAS DE FAZER ISSO MAS ALGUMAS SÃO MELHORES QUE OUTRAS:

            OPÇÃO #1: 
                return Object.values(this.items);
                    - obtendo um array usando Object.values
                    - método do ECMAScript 2017, não funciona em todos os navegadores.
            
            OPÇÃO #2:
                implementação em força bruta
                    - aqui foi implementação em força bruta com o objetivo de demonstrar como é feito em navegadores mais antigos
        */

        let values = [];

        // percorrendo as chaves do objeto items
        for(let key in this.items) {
            
            // verifica se essa propriedade é do objeto Set
            if(this.items.hasOwnProperty(key)) {

                // atualiza o array e adiciona a propiredade encontrada
                values.push(key);

            }

        }

        // retorna o contador para o usuário:
        return values;
    }

    // Método que devolve um novo conjunto com os elementos do conjunto atual e do conjunto inserido no método
    union(otherSet) {

        // criando um novo conjunto
        const unionSet = new Set();

        // percorre todos os valores deste conjunto e via arrow function e add adiciona esses novos valores no conjunto que será retornado
        this.values().forEach(value => unionSet.add(value));

        // faz o mesmo para o conjunto inserido no método
        otherSet.values().forEach(value => unionSet.add(value));

        // retorna o novo conjunto com os elementos dos dois conjuntos
        return unionSet;

    }

    // Método que devolve um novo conjunto com os elementos do conjunto atual que também estão presentes no conjunto inserido no método.
    intersection(otherSet) {

        // criando um novo conjunto
        const intersectionSet = new Set();

        // variavel armazenando valores do set atual
        const values = this.values()

        // contador que conta até o comprimento do set atual
        for (let i=0; i < values.length; i++) {

            // se o valor que está no set atual existir no set externo
            if (otherSet.has(values[i])) {

                // insere esse elemento no set de insersecção
                intersectionSet.add(values[i]);

            }
        }

        // retona o conjunto de intersecção
        return intersectionSet;

    }

    // Método que devolve um novo conjunto com os elementos do conjunto atual que não estão presentes no conjunto inserido no método.
    difference(otherSet) {

        // criando um novo conjunto
        const differenceSet = new Set();

        // percorrendo o array com os valores do conjunto atual
        this.values().forEach(value => {

            // varificando se cada elemento do conjunto atual está no conjunto externo
            if(!otherSet.has(value)) {

                // caso não eseja ele é adiconado ao conjunto de diferença
                differenceSet.add(value);
            }
        });

        // retoando o novo ocnjunto
        return differenceSet;

    }

    // Método que retorna se o conjunto atual é subconjunto do conjunto inserido no método
    isSubsetOf(otherSet) {

        // verifica se esse set é maior que o set inserido
        if(this.size() > otherSet.size()) {

            // se ele for maior ele não pode ser subconjunto de um conjunto menor que ele mesmo
            return false;
        }

        // variavel de resposta ao usuário
        let isSubset = true; 

        // percorrendo o conjunto atual
        this.values().every(value => {

            // verificando se o valor do conjunto atual não está no conjunto externo
            if (!otherSet.has(value)) {

                // se ele não estiver retorna falso pois todo elemento de um subconjunto deve estar no conjunto maior
                isSubset = false;

                // retornando que não é um subconjunto
                return false;
            }

            // se passar paela verificação anterior ele é um subconjunto
            return true;
        });

        // retoando valor inalterado caso os tenha passado em todos os testes
        return isSubset;

    }
}

/*
const set = new Set();

console.log(set)
console.log(set.size())

set.add(1)
set.add(2)

console.log(set.size())

console.log(set)

console.log(set.has(4))
console.log(set.has(1))

set.delete(1)

console.log(set)
console.log(set.size())

set.add(2)
set.add(4)

console.log(set)
console.log(set.size())

set.clear()

console.log(set)
console.log(set.size())

setA = new Set();
setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(3);
setB.add(4);
setB.add(5);

uniao = setA.union(setB)

console.log(uniao.values())


setA = new Set();
setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(3);
setB.add(4);

interseccao = setA.intersection(setB)

console.log(interseccao.values())

setA = new Set();
setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(3);
setB.add(4);

diferente = setA.difference(setB)

console.log(diferente.values())


setA = new Set();
setB = new Set();
setC = new Set();

setA.add(1);
setA.add(2);

setB.add(1);
setB.add(2);
setB.add(3);

setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB))
console.log(setA.isSubsetOf(setC))
*/


