
var nomeUsuario = document.querySelector('input');
var listaUl = document.querySelector('ul');



function render(repos){
    
        for (rep of repos ){

            const textoLi = document.createTextNode(rep.name);
            const listaLi = document.createElement('li');

            listaLi.appendChild(textoLi);
            listaUl.appendChild(listaLi);
        }
}

/*Ao clicar no botão ele executa a função listar, pegando o nome do usuario digitado e buscando na apido github.*/
  function listar() {
    var user = nomeUsuario.value;
        if(!user){
            return ;
        }

    axios.get('https://api.github.com/users/'+user+'/repos')
    .then(function(response){
        render(response.data); //se for encontrado, executa a função render passando como parametro os dados encontrados.
    })
    .catch(function(error){
        console.warn('Usuario não existe!'); // mostra o erro com o sinal, avisa.
    });

    
}
