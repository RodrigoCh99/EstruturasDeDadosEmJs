// Importando arquivos
var DictionaryFile = require('../estruturas_de_dados/Dictionary.js');
var LinkedListFile = require('../estruturas_de_dados/LinkedList.js');

// Importando classes dos arquivos importados
var defaultToString = DictionaryFile.defaultToString;
var ValuePair = DictionaryFile.ValuePair;
var LinkedList = LinkedListFile.LinkedList;

// Definição da classe tabela de espalhamento que resolve colisões com lista encadeada
class HashTableSeparateChaining {

    // Função construtora de Objetos:
    constructor(toStrFn = defaultToString) {

        // Parâmetro que armazena a função de conversão em string inserida pelo user
        this.toStrFn = toStrFn;

        // parâmetro que armazena a tabela em si
        this.table = {};

    }

    /* 
    Função de Hash que será usada pela tabela, essa função é a mais simples possível
    
        - Consiste em somar os valores ASCII de cada letra da chave

    */
    loseloseHashCode(key) {

        // Verificação se a chave inserida é numérica
        if (typeof key === 'number') {

            // se for retornar o próprio numero:
            return key;

        }

        // caso a key não seja numerica ela deve ser convertida em string com a função inserida
        const tableKey = this.toStrFn(key);

        // percorrendo a string e pegando seu ASCII e somando com o das letras anteriores
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {

            // usando a função nativa do .Js para fazer a conversão em ASCII
            hash += tableKey.charCodeAt(i)

        }

        console.lo

        // reduzindo o tamanho do retorno uma vez que a soma de ASCII pode dar um numero muito grande 
        // e isso pode ficar impossivel de armazenar em um espaço de memória 
        // então para isso divide-se o valor obtido por um numero aleatório e 
        // armazena-se o resto da divisão
        return hash % 37;

    }
    
    
    // Método que aplica a função hash criada
    hashCode(key) {

        // aplicação da função loseloseHashCode da própria classe
        return this.loseloseHashCode(key);
    }

    // Método que recebe uma chave e um valor e insere um item na tabela hash com base nisso
    put(key, value) {

        // verificação se chave e valor não estão vazios
        if (key != null && value != null) {

            // armazenando o valor que a função hash retornou
            const position = this.hashCode(key);

            // verificando se a posição informada já foi preenchida por outro valor
            if (this.table[position] == null) {

                // caso esteja vazia preenche-se a posição com uma lista encadeada
                this.table[position] = new LinkedList();

            }

            // caso não esteja vazia adicionamos um node a lista com o par chave valor
            this.table[position].push(new ValuePair(key, value));

            // retornando a confirmação para o usuário
            return true 

        }

        // caso tenha inserido algum parametro como null
        return false 

    }

    // Método responsável retornar o valor encontrado em uma chave inserida
    get(key) {

        // armazenando o valor que a função hash retornou
        const position = this.hashCode(key);

        // armazenando a lista encadeada referente a posição retornada pela função hash
        const LinkedList = this.table[position];

        // verificando se a lista encadeada está vazia:
        if (LinkedList != null && !LinkedList.isEmpty()) {

            // armazenado o primeiro item da lista encadeada
            let current = LinkedList.getHead();

            // percorrendo a lista encadeada até o null no fim dela
            while ( current != null) {

                // verificando se cada node da lista tem o par chave-valor com key procurada
                if ( current.element.key === key ) {

                    // retornando o valor encontrado nesse par chave-valor que possui essa chave
                    return current.element.value;

                }

                // caso não encontre passa para o próximo nó na lista encadeada
                current = current.next;

            }

        }

        return undefined;

    }

    // Método responsável por deletar itens de dentro da tabela com base na chave
    remove(key) {

        // armazenando o valor que a função hash retornou
        const position = this.hashCode(key);

        // armazenando a lista encadeada referente a posição retornada pela função hash
        const LinkedList = this.table[position];

        // verificando se a lista encadeada está vazia:
        if (LinkedList != null && !LinkedList.isEmpty()) {
         
            // armazenado o primeiro item da lista encadeada
            let current = LinkedList.getHead();

            // percorrendo a lista encadeada até o null no fim dela
            while ( current != null) {
            
                // verificando se cada node da lista tem o par chave-valor com key procurada
                if ( current.element.key === key ) {

                    // remove o item da linked list
                    LinkedList.remove(current.element);

                    // verifica se a lista encadeada está vazia após a remoção do item
                    if (LinkedList.isEmpty()) {

                        // se estiver pode remover ela também
                        delete this.table[position];

                    }

                    return true;

                }

                current = current.next;
            
            }

        }

        // algum dos parametros inseridos está vazio
        return false;

    }

    // Método que retorna quantos itens estão salvos na tabela:
    size() {

        // pega todos os objetos do parametro table como array e retorna o tamanho do array
        return Object.keys(this.table).length;

    }

    // Método que verifica se a tabela está vazia
    isEmpty() {

        // compara o tamanho da saída com o 0 e retorna true ou false
        return this.size() === 0;

    }
    

    // Método que retorna a tabela como uma string
    toString() {

        // verificando se o dicionário está vazio
        if (this.isEmpty()) {

            // se estiver retorna uma string vazia
            return '';
        }

        // variavel armazenando as cheves
        const keys = Object.keys(this.table);

        // criando uma string de output para o método
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;

        // iterando pelas chaves salvas na tabela
        for (let i = 1; i < keys.length; i++) {

            // atualizando a string de output com os valores salvos na tabela
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;

        }

        return objString;

    }

}

/*
var hash = new HashTableSeparateChaining();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'Jamie@email.com');

hash.put('Jack', 'Jack@email.com');
hash.put('Jasmine', 'Jasmine@email.com');
hash.put('Jake', 'Jake@email.com');

hash.put('Nathan', 'Nathan@email.com');
hash.put('Athelstan', 'Athelstan@email.com');
hash.put('Sue', 'Sue@email.com');

hash.put('Aethewulf', 'Aethewulf@email.com');
hash.put('Sargeras', 'Sargeras@email.com');

console.log(hash.toString());
*/