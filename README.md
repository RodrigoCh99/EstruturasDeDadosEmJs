# Estruturas De Dados Em .Js

### Como rodar os códigos:
- instale o node.js e rode os arquivos usando: `node nome_do_arquivo.js`
- caso esteja usando o vs code siga o [tutorial](https://stackoverflow.com/questions/31778413/run-javascript-in-visual-studio-code)

### Estes códigos são baseados no livro: **Estruturas de Dados e Algoritmos com JavaScript**
- [Disponivel na amazon](https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932/ref=sr_1_1?keywords=estruturas+de+dados+e+algoritmos+com+javascript&qid=1649470930&s=books&sprefix=estruturas+de+dad%2Cstripbooks%2C220&sr=1-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9)
- [Repositório oficial do livro](https://github.com/RodrigoCh99/javascript-datastructures-algorithms)


## **Tabela de complexidade para consulta rápida:**

<table class="tg">
<thead>
  <tr>
    <th class="tg-4x8v" rowspan="2">ESTRUTURA DE DADOS</th>
    <th class="tg-n6ju" colspan="3"><span style="font-weight:bold">CASOS MÉDIOS</span></th>
    <th class="tg-7btt" colspan="3">PIOR CASO</th>
  </tr>
  <tr>
    <th class="tg-c3ow">Inserção</th>
    <th class="tg-c3ow">Remoção</th>
    <th class="tg-c3ow">Busca</th>
    <th class="tg-c3ow">Inserção</th>
    <th class="tg-c3ow">Remoção</th>
    <th class="tg-c3ow">Busca</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-fymr"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>/<a href="https://github.com/RodrigoCh99/EstruturasDeDadosEmJs/blob/main/estruturas_de_dados/Queue.js">Queue</a>/<a href="https://github.com/RodrigoCh99/EstruturasDeDadosEmJs/blob/main/estruturas_de_dados/Stack.js">Stack</a></td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr"><a href="https://github.com/RodrigoCh99/EstruturasDeDadosEmJs/blob/main/estruturas_de_dados/LinkedList.js">LinkedList</a></td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr"><a href="https://github.com/RodrigoCh99/EstruturasDeDadosEmJs/blob/main/estruturas_de_dados/DoublyLinkedList.js">DoublyLinkedList</a></td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr">HashTable</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(1)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr">BinarySearchTree</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(n)</td>
    <td class="tg-0pky">O(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr">AVLTree</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr">RedBlackTree</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
  </tr>
  <tr>
    <td class="tg-fymr">BinaryHeap</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-f8tv">O(1): <br><i>encontrar<br>min e max</i></td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(log(n)</td>
    <td class="tg-0pky">O(1)</td>
  </tr>
</tbody>
</table>


## **Estruturas de dados Interessantes que não estão no livro mas foram implementadas**

- [ ] **Priority queue:** uma fila em que o objeto possui uma prioridade associada quando é inserido na fila.
- [ ] **Multiset (bag ou mset):** um multiconjunto é a generalização de um conjunto, de tal forma que permite a repetição de elementos.
- [ ] **Hashset:** um conjunto com função de espalhamento.
- [ ] **DoubleHashTable:** hashtable que usa função de espalhamento dupla para lidar com colisões.
- [ ] **NestedHashTable:** hashtable que usa aninhamento de tabelas de espalhamento para lidar com colições e armazenar dados em hierarquia.
