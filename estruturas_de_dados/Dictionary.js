// função que converte o valor recebido em string
function defaultToString(item) {

    // caso o valor seja null ou undefined isso que será escrito na string de output
    if (item === null) {

        return 'NULL';

    } else if (item === undefined) {

        return 'UNDEFINED';

    // a verificação se o item inserido se trata de uma string é mais complexa 
    } else if ( typeof item === 'string' || item instanceof String ) {

        return `${item}`;

    }

    // caso não caia nos casos anteriores é só converter em string
    return item.toString();
}

// classe chave-valor
class ValuePair {

    // Função construtora de Objetos:
    constructor(key, value) {

        // parametro responsável por armazenar a chave
        this.key = key;

        // parametro responsável por armazenar o valor
        this.value = value;

    }

    // Método que converte o par em string para visualização:
    toString() {

        return `[#${this.key}:${this.value}]`;

    }

}

// Exportando a classe map ou dicionário:
class Dictionary {

    // Função construtora de Objetos:
    constructor(toStrFn = defaultToString) {

        // parametro resposnável pela função que converte a chave em string
        this.toStrFn = toStrFn;

        // parametro responsável pela tabela em si
        this.table = {};
    }

    // Método que verifica a existencia de uma chave no dicionário:
    hasKey(key) {

        // retona true se a key estiver no dicionário e false caso contrário:
        return this.table[this.toStrFn(key)] != null;

    }

    // Método responsável por adiconar um novo elemento ao dicionário:
    set(key, value) {

        // verifica se tanto a chave quanto o valor são diferentes de null 
        if (key != null && value != null) {

            // cria uma string da chave inserida com a função instanciada na classe
            const tableKey = this.toStrFn(key);

            // atribui um objeto ValuePair a chave string criada
            this.table[tableKey] = new ValuePair(key, value);

            // retorna a confirmação que o par chave valor foi adicionado ao dicionário
            return true;
        }

        // retorna a negação por conta de algum dos casos a cima
        return false; 

    }

    // Método responsável por remover itens do dicionário com base na chave
    remove(key) {

        // verificando a existencia da chave
        if (this.hasKey(key)) {

            // se a chave existir ele é apagada
            delete this.table[this.toStrFn(key)];

            // retorna a confirmação para o usuário
            return true;

        }

        // caso não exista retorna a negação
        return false;
    }

    // Método que retorna valores com base na key
    get(key) {

        // armazenando em uma variavel o par chave valor retornado para a chave inserida
        const valuePair = this.table[this.toStrFn(key)];

        // verifica se o par chave-valor é null caso seja retorna undefined caso contrário retorna o valor
        return valuePair == null ? undefined : valuePair.value;

    }

    // Método responsável por retornar os pares chave-valor armazenados no dicionário
    keyValues() {

        return Object.values(this.table);

    }

    // Método responsável por retornar as chaves presentes no dicionário
    keys() {

        // iterando pela saída de keyValues e retornando as chaves
        return this.keyValues().map(valuePair => valuePair.key);

    }

    // Método responsável por retornar os valores presentes no dicionário
    values() {

        // iterando pela saída de keyValues e retornando os valores
        return this.keyValues().map(valuePair => valuePair.value);

    }

    // Método que itera pelos elementos salvos no dicionário aplicando uma função:
    forEach(callbackFn) {

        // variavel armazenando os pares chave valor em um array
        const valuePairs = this.keyValues();

        // percorre os itens do array
        for (let i = 0; i < valuePairs.length; i++) {

            // aplica a função com chave e valor como parametros e armazena em uma variavel
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);

            // se o retorno da função for false para algum dos elementos
            if (result == false) {

                // para o loop
                break;

            }

        }

    }

    // Método que retorna quantos itens estão salvos no dicionário:
    size() {

        // pega todos os objetos do parametro table como array e retorna o tamanho do array
        return Object.keys(this.table).length;

    }

    // Método que verifica se o dicionário está vazio
    isEmpty() {

        // compara o tamanho da saída com o 0 e retorna true ou false
        return this.size() === 0;

    }

    // Método responsável por limpar o dicionário:
    clear() {

        // voltando o parametro para seu estado inicial
        this.table = {};

    }

    // Método que retorna o dicionário como uma string
    toString() {

        // verificando se o dicionário está vazio
        if (this.isEmpty()) {

            // se estiver retorna uma string vazia
            return '';
        }

        // constante armazenando um array com todos os pares chave-valor
        const valuePairs = this.keyValues();

        // variavel que armazena o 1º par chave-valor em formato string
        let objString = `${valuePairs[0].toString()}`;

        // iterando pelo array que contem todos os pares chave-valor
        for (let i = 1; i < valuePairs.length; i++) {

            // atualizando o valor da string com os pares existentes
            objString = `${objString}, ${valuePairs[i].toString()}`;

        }

        // retornando a string completa após iterar por todos os elementos no dicionário
        return objString;

    }

}

/*
const dictionary = new Dictionary()

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());


console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John')


console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, Value: ${v}`);
});

*/