/* EXEMPLO 1
PREENCHER A LISTA2 COM O DOBRO DOS VALORES DE LISTA.*/


let lista = [2, 16, 40, 5];
let lista2 = [];

//PRIMEIRA FORMA DE FAZER 
lista2 = lista.map(function(element) { // sendo -> e <- cada elemento do array

    return element * 2;
});

//SEGUNDA FORMA DE FAZER
for (let i in lista) {
    lista2.push(lista[1] * 2);
}

let res = lista2;

// console.log(res); 


/*EXEMPLO 2
FILTRAR ELEMENTOS DO ARRAY, SE EXISTIR ITENS MENORES QUE 20 RETORNE TRUE, SE NÃO RETORNE FALSE. */

let lista = [2, 16, 40, 5];
let lista2 = [];

lista2 = lista.filter(function(element) {

    return (element < 20) ? true : false; //outra forma de verificar
});

let res = lista2;

// console.log(res);


/*EXEMPLO 3
FILTRAR ELEMENTOS DO ARRAY, SE TODOS OS ITENS FOREM MENORES QUE 20 RETORNE TRUE, SE NÃO RETORNE FALSE. */

let lista = [2, 16, 40, 5];
let lista2 = [];

lista2 = lista.every(function(element) {
    if (element < 20) {
        return true;
    } else {
        return false;
    }
});

let res = lista2;

// console.log(res);


/*EXEMPLO 4
PROCURAR E RETORNAR UM ELEMENTO DO ARRAY */

let lista = [{ id: 1, nome: 'fulano', sobrenome: 'da silva' },
    { id: 2, nome: 'João', sobrenome: 'Gomes' },
    { id: 3, nome: 'Maria', sobrenome: 'Xavier' }
];

let pessoa = lista.find(function(element) {
    return (element.sobrenome == 'Xavier') ? true : false;
});

let res = lista2;

// console.log(res);