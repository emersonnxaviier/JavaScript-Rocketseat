/* Numa função, que você não sabe quantos parametros será passado, utiliza-se o operador REST.
 
    EXEMPLO_1:
*/

function adiciona(...numeros) { // independente de quantos itens forem enviados, serão recebidos aqui em forma de array.

    console.log(numeros)
}

//ex:  adiciona(1, 2, 3, 4);

//  ou

//ex: adiciona(1, 2);   não importa a quantidade.



// EXEMPLO DE SPREAD E REST

function adicionar(nomes, ...novosNomes) { //conceito de rest.

    let conjunto = [
        ...nomes, // conceito de spread.
        ...novosNomes
    ];
    return conjunto;
}

let nomes = ['Evelyn', 'Paula'];

let outros = adicionar(nomes, 'Paulo', 'Émerson', 'Ana');

//   console.log(outros);