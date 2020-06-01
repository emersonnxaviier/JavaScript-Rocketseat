//objeto pessoa

let pessoa = {
    nome: 'João',
    sobrenome: 'Gomes',

    social: {

        facebook: 'João Gm',

        instagram: {
            url: '@joaozinho',
            seguidores: 1000
        }
    }
};


// desconstruir o objeto

/*  a partir do objeto pessoa pega as informações que quer desconstruir as tornando em variáveis.  */

let { nome, sobrenome, idade = 25 } = pessoa; // para alterar o nome de uma das variáveis basta colocar na frente :novoNome.

// como a idade não foi definida no objeto pode setar um valor padrão para ela.




//EXEMPLO_2

// pegar informações do objeto social que esta dentro do objeto pessoa.

// entra no objeto social -> objeto instagram -> renomeia url para instagram se quiser.

let { nome, social: { instagram: { url: instagram } } } = pessoa;




// EXEMPLO_3

//desconstruir o objeto no próprio parâmetro de uma função

function nomeCompleto({ nome, sobrenome }) {
    return `${nome} ${sobrenome}`;
}