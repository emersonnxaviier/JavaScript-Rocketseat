

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){

    listElement.innerHTML = '';  //tudo que estiver dentro da ul será vazio, para que toda vez que adicionar um elemento nao repita os elementos já existentes.

    for(todo of todos){
        var todoElement = document.createElement('li');
        var textTodo = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href', '#');
        
        todoElement.appendChild(textTodo);
        listElement.appendChild(todoElement);

        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        var pos = todos.indexOf(todo);      //procura no array de todos o indice do todo e retorna a posição dele.

        linkElement.setAttribute('onclick', 'deleteTodos('+pos+')'); //com o click no link Excluir ele chama a função deleteTodos com a posição do todo.

    }
}
 
renderTodos();  //renderiza a lista com novos itens.

function addTodos() {
    
    var textElement = inputElement.value;   //pega o valor digitado no input
    todos.push(textElement);                //adiciona o texto do input no array
    inputElement.value = '';                //apaga o texto atual do input apos ser add
    renderTodos();
    salveStorage();
}

buttonElement.onclick = addTodos;


function deleteTodos(posicao) {
    
    todos.splice(posicao, 1); //da posição passada remove um elemento.
    renderTodos(); 
    salveStorage();      
}

function salveStorage() {
    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}