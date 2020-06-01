//EXEMPLO COM ARRAY

let numeros = [1, 2, 3, 4];

// para complementar o array outros com os valores do array numeros.
let maisNumeros = [...numeros, 5, 6, 7, 8];

//  console.log(maisNumeros);



//EXEMPLO COM OBJETOS

let info = {
    nome: 'Émerson',
    sobrenome: 'Xavier',
    idade: 18
};

let maisInfo = {
    ...info,
    cidade: 'Paulo Afonso',
    estado: 'BA',
    pais: 'Brasil'
};
//   console.log(maisInfo);



//EXEMPLO COM UMA FUNÇÃO

function adicionarInfo(info) {

    let maisInfo = {
        ...info,
        status: 0,
        token: 'xxxxxx',
        data_cadastro: 'ddddddd'
    };
    return maisInfo;
}

let result = adicionarInfo({ nome: 'Pedro', sobrenome: 'Silva' });

//    console.log(result);