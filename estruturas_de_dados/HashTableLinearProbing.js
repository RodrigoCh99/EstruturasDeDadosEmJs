// Importando arquivos
var DictionaryFile = require('../estruturas_de_dados/Dictionary.js');
var LinkedListFile = require('../estruturas_de_dados/LinkedList.js');

// Importando classes dos arquivos importados
var defaultToString = DictionaryFile.defaultToString;
var ValuePair = DictionaryFile.ValuePair;

// Classe Tabela de espalhamento que resolve colisões com sondagem linear
class HashTableLinearProbing {

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

            // verificando se o valor na posição retornada pelo hash está vazio
            if (this.table[position] === null) {

                // se estiver vazio é só inserir normalmente
                this.table[position] = new ValuePair(key, value);

            // se algum valor já preencheu a posição deve se procurar outra posição
            } else {

                // começando pela posição seguinte
                let index = position + 1;

                // iterar pelas posições da tabela enquanto forem diferentes de null
                while (this.table[index] != null) {

                    // aumentando o indice
                    index++;

                }

                // quando encontrar uma posição vazia preencher ela com o valor
                this.table[index] = new ValuePair(key, value);

            }

            // confirmação que conseguiu inserir o dado
            return true;
        }

        // chave ou valor estão vazios
        return false;

    }

    // Método responsável retornar o valor encontrado em uma chave inserida
    get(key) {

        // armazenando o valor que a função hash retornou
        const position = this.hashCode(key);

        // verificação se essa posição está preenchida
        if (this.table[position] !== null) {

            // verificação se o valor que está nessa posição tem a chave procurada
            if (this.table[position].key === key) {

                // se for é só retornar o valor
                return this.table[position].value;

            }

            // caso não seja a chave procurada
            let index = position + 1;

            // percorrer a lista enquanto as posições são diferentes de null e as chaves dos elementos forem diferentes da chave procurada
            while (this.table[index] != null && this.table[index].key !== key) {

                index++;

            }

            // quando encontrar a chave procurada
            if (this.table[index] != null && this.table[index].key === key) {

                // retona o valor nessa posição
                return this.position[index].value;

            }

        }

        // caso não encontre a chave na tabela
        return undefined;

    }

    // Método que corrige as posições quando ocorre alguma remoção caso seja necessário:
    verifyRemoveSideEffect(key, removedPosition) {

        // armazenando o valor que a função hash retornou
        const hash = this.hashCode(key)

        // armazenando um indice que é maior que a posição da qual o item foi removido da tabela
        let index = removedPosition + 1;

        // enquanto o item da tabela não for vazio
        while (this.table[index] != null) {

            // armazenando o valor retornado pela função hash para o item atual da iteração
            const posHash = this.hashCode(this.table[index].key);

            // se hash da posição atual for menor que a posição removida ou menor que hash 
            if (posHash <= hash || posHash <= removedPosition) {

                // atribui a posição removida a ele
                this.table[removedPosition] = this.table[index];

                // deleta a posição dele
                delete this.table[index];

                // atribui um novo valor a posição removida que no caso é o index atual
                removedPosition = index;

            }

            index++;

        }

    }


    // Método responsável por deletar itens de dentro da tabela com base na chave
    remove(key) {

        // armazenando o valor que a função hash retornou
        const position = this.hashCode(key);

        // verificação se essa posição está preenchida
        if (this.table[position] !== null) {

            // verificação se o valor que está nessa posição tem a chave procurada
            if (this.table[position].key === key) {

                // se for é só remover o item da tabela
                delete this.table[position];

                // realizando a operação de correção da tabela após a remoção
                this.verifyRemoveSideEffect(key, position);

                // retorna confirmação que a remoção ocorreu
                return true;

            }

            // caso não seja a chave procurada
            let index = position + 1;

            // percorrer a lista enquanto as posições são diferentes de null e as chaves dos elementos forem diferentes da chave procurada
            while (this.table[index] != null && this.table[index].key !== key) {

                index++;

            }

            // quando encontrar a chave procurada
            if (this.table[index] != null && this.table[index].key === key) {

                // remove o item da tabela
                delete this.table[index];

                // realizando a operação de correção da tabela após a remoção
                this.verifyRemoveSideEffect(key, index);

                // retorna confirmação que a remoção ocorreu
                return true;

            }

        }

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

var hash = new HashTableLinearProbing();
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

console.log('ANTES DA REMOÇÃO:')
console.log(hash.toString());

hash.remove('Jamie')

console.log('APÓS A REMOÇÃO:')
console.log(hash.toString());