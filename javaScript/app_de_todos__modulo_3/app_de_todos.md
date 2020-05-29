RENDERIZAR = FIXAR = TRADUZIR.


# Criar uma funcionalidade de todos(tudus)

- São os elementos dentro do HTML como o 'Fazer café', 'Estudar javaScript', 'acessar comunidade da Rocketseat', observados nos exemplos.

# AULA CRIANDO TODOS

- `listElement.innerHTML = '';`  ->   tudo que estiver dentro do HTML no caso do exemplo a ul será vazio, assim toda vez que adicionar um elemento não repita os elementos já existentes.


# AULA EXCLUINDO TODOS

**Como remover algo do array ?**

- O metodo .splice() -> remove uma quantidade de itens do array baseado na posição que for passada.

- O .indexOf() retorna qual a posição do elemento no array.

# AULA SALVANDO NO STORAGE

- Utilizando o armazenamento local chamado local storage para armazenar os dados dos todos mesmo atualizando a pagina ou fechando e abrindo a aplicação permitindo armazenar informações não relacionais, apenas, chave e valor.

- Como as operações realizadas que modificam a lista de todos são adicionar e excluir, a função que salva os todos no storage vão ser chamada nessas duas operações.

- Para salvar utiliza-se a variavel global `localStorage.setItem('list_todos', JSON.stringfy(todos));` -> sendo 'list_todos' um nome qualquer, e todos a lista de valores e o JSON.stringfy() para converter o vetor em uma string já que o localStorage não salva um array apenas uma chave e um valor:   **'list_todos' = chave**  e  **JSON.stringfy(todos) = valor**.

- Em seguida chama a função nas operações realizadas.

## Quando atualizar a página, ir no localStorage e preencher a lista com os valores

- Na variavél todos que recebe o array troca por `var todos = JSON.parse(localStorage.getItem('list_todos'))`, como está no formato JSON o parse é para trasformar novamente em um array.

- Como o array todos agora está vazio, na mesma linha acrescenta um array vazio para que se não conseguir retornar nada, ele retorne o valor padrão que será o vazio, ficando `var todos = JSON.parse(localStorage.getItem('list_todos')) || []`.

