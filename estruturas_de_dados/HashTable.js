// Importando classes de um outro módulo js:
var DictionaryFile = require('../estruturas_de_dados/Dictionary.js');
var defaultToString = DictionaryFile.defaultToString;
var ValuePair = DictionaryFile.ValuePair;


// Classe HashTable ou HashMap ou ainda Tabela de espalhamento
class HashTable {

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

    // Método que recebe uma chave e um valor e insere ou atualiza um item na tabela hash com base nisso
    put(key, value) {

        // verificação se chave e valor não estão nulos
        if (key != null && value != null) {

            // armazenando uma variavel com a posição retornada pela função
            const position = this.hashCode(key);

            // atribuindo a um objeto da classe ValuePair a tabela usando a posição como chave
            this.table[position] = new ValuePair(key, value);

            // confirmação para o usuário
            return true 

        }

        // caso contrário
        return false;

    }

    // Método responsável retornar o valor encontrado em uma chave inserida
    get(key) {

        // armazenando o par chave e valor retornado pela chave inserida
        const valuePair = this.table[this.hashCode(key)];

        // retonando undefined se estiver null ou o valor caso esteja preenchido
        return valuePair == null ? undefined : valuePair.value

    }


    // Método responsável por deletar itens de dentro da tabela com base na chave
    remove(key) {

        // descobrindo o valor de hash novamente para chave inserida:
        const hash = this.hashCode(key);

        // pegando o objeto chave-valor armazenado na posição retornada pelo hash
        const valuePair = this.table[hash];

        // verificando se o par chave-valor não veio vazio
        if (valuePair != null) {

            // remove do parametro
            delete this.table[hash];

            // confirmação para o usuário
            return true; 

        }

        // caso o objeto chave-valor esteja vazio essa chave não foi inserida ainda então não tem como remover
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
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
console.log(hash.get('Rodrigo'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

var hash = new HashTable();
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