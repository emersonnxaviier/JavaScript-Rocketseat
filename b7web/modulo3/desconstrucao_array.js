let pessoa = ['José Lucas', 'José', 'Lucas', '@joseLucas'];

//como um array não tem um nome, ao desconstruir deve-se colocar um nome.
let [nomeCompleto, nome, sobrenome, instagram] = pessoa;



// se quiser apenas nome completo e instagram e pular nome e sobrenome.
let [nomeCompleto, , , instagram] = pessoa;