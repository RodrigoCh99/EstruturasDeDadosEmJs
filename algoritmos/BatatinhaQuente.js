var Queue = require('../estruturas_de_dados/Queue.js');

// Função que simula o jogo batatinha quente aplicando uma versão customizada de Fila (Fila circular)
function hotPotato(elementsList, num) {

    // objeto armazenando a estrutura de Fila:
    const queue = new Queue();

    // lista com os iens elimminados:
    const eliminatedList = []

    // enfileirando itens inseridos na função:
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    }

    // criando uma fila circular:
    while ( queue.size() > 1 ) {

        // percorrendo a fila enquanto não chegou ao numero insrido na função:
        for (let i = 0; i < num; i++) {

            // removendo um item do inicio da fila e adiciona no final:
            queue.enqueue(queue.deque());

        }

        // Saiu do loop então chegou ao valor inserido na função:
        eliminatedList.push(queue.deque());

    }

    // retornando um objeto com os eliminados e com o vencedor
    return {

        eliminated: eliminatedList,
        winner: queue.deque()

    };

}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach( name => {
        console.log(`${name} was eliminated from hot potato game`);
    }
);
console.log(`the winner is: ${result.winner}`)