

# VARIÁVEIS

- ` var nome = 'Émerson'; ` -> enviada para o escopo geral da tela, ou seja, tem acesso a ela em qualquer área do sistema, com isso consegue usar essa variável com o window, que é uma variável global.

    Ex: console.log(window.nome);

- `let nome = 'Émerson';` -> quando é definida fica disponível apenas naquele escopo de código, portanto se tentar acessar ela em outro local não será possível, vantagem de usar ela é que evita consumo excessivo de mémoria sem necessidade.

  Ex: `if(nome == 'joão'){ let idade = 60; } console.log(idade);` --> Não irá funcionar pois o console não está dentro do if onde o o let idade foi definido.


- `const nome = 'Émerson';`  -> Variável de valor constante, com isso ela não pode receber um novo valor, uma vez definida ficará daquele jeito. A exeção para arrays e objetos. 

# EVENTOS DE TECLADO

- onkeydown -> o evento ocorre quando aperta/segura a tecla ao digitar.

- onkeypress

- onkeyup -> o evento ocorre quando solta cada tecla ao digitar.

### OBSERVAÇÃO 1

-   É possível enviar informações mais detalhadas sobre o evento, ou seja, o que aconteceu, quando aconteceu e detalhes especificos, é 
    possível saber através do comando -> event <- assim como o this trata do próprio elemento, o event trata do próprio 
    evento, e mostrando as informações com um console.log() deve-se prestar atenção no keyCode:, que é o código da tecla precionada, tendo 
    também o shiftKey:, ctrlKey:, altKey:, para identificar se a tecla foi precionada junto com o shit, control e alt.


# MUDANÇA DE ESTILOS

- `documente.getEmentById('ID DO ELEMENTO').classList` -> serve para acessar a lista de classes do elemento, podendo fazer varias operações, dentre elas o add, remove e contains.

    ex: `documente.getEmentById('ID DO ELEMENTO').classList.add('NOME DA CLASSE')`  --> adiciona uma classe.
        `documente.getEmentById('ID DO ELEMENTO').classList.remove('NOME DA CLASSE')` --> remove uma classe.
        `documente.getEmentById('ID DO ELEMENTO').classList.contains('NOME DA CLASSE')` --> verifica se a classe passada existe. 


# LOOP FOR ARRAY

- Ex: `let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];`
      `for(let i in carros){ console.log(carros[i]) } ` --> Sendo -> i <- uma variavél auxiliar que recebe cada posição do array.


# MÉTODOS DE STRING

## MÉTODOS RESPONSAVÉIS POR EXTRAIR INFORMAÇÕES DE UMA STRING

- O .slice(x, y) ele pega um pedaço da string, de onde você quer até onde você quer. Podendo colocar também um único parâmetro que é o de onde deseja começar, e se colocar número negativo, ele começa a contar de trás pra frente.

Ex: let nome = 'João souza';
      let resultado = nome.slice(ONDE VAI COMEÇAR, ONDE VAI PARAR );


- O .substr(x, y)  o primeiro parâmetro é de onde deseja começar e o segundo é quantos caracteres deseja pegar, funcionando também com números negativos.

Ex:  `let nome = 'João souza';`
     `let resultado = nome.substr(ONDE VAI COMEÇAR, TOTAL DE CARACTERES);`


## MÉTODOS RESPONSAVÉIS POR SUBSTITUIR TEXTOS ESPECIFICOS EM UMA STRING

- O .replace(x, y) funciona da seguinte forma, procure por X e substitua por Y.

    Ex:   `let nome = 'João souza';`
          `let resultado = nome.replace(souza, Silva);`
          RESULTADO: João Silva


- O .toUpperCase() ->  torna todas as letras maiusculas.

- O .toLowerCase() -> torna todas as letras minusculas.

- O .trim() -> retira os espaços vazios tanto do começo quanto do fim de uma string. 

- O .charAt(posicao) ou let nome[posicao] -> diz qual caracter está na posição passada.


- O .split(x) -> se achar X vai cortar naquele lugar e dividir transformando a string em array.

Ex: `let nome = 'João souza';`
        `let resultado = nome.split(' ');` -> nesse caso vai dividir no espaço entre uma palavra e outra e tornar um array com duas posições.
    
    let nome = '1,2,3,4,5';
        let resultado = nome.split(',');  -> cria um array com cinco posições, ou seja, transformou uma string em array.

             RESULTADO: ['1', '2', '3', '4', '5']


# MÉTODOS DE MANIPULAÇÃO DE NUMBERS

- O .toString -> torna a variável de valor numerico em string.

- O .toFixed(QUANTIDADE DE CASAS APÓS A VÍRGULA) -> deixa um valor decimal com muitas casas a pós a vírgula com a quntidade que quiser.

- O parseInt(VARIAVEL STRING) -> transforma uma variavel string em número.

- O parseFloat(VARIAVEL STRING)-> transforma uma variavel string em número preservanto as casas decimais daquela variável.


# MÉTODOS DE ARRAYS (MUITO IMPORTANTE)

- O .toString -> usado em um array, transforma em uma string o array.

    Ex: `let lista = ['ovo', 'farinha', 'leite', 'açucar'];`
     ` let res = lista.toString(); `

        RESULTADO: 'ovo, farinha, leite, açucar'


- O .join(X) -> pega um array, junta tudo em uma string e separa por X, sendo X qualquer coisa que quiser.

    Ex: `let lista = ['ovo', 'farinha', 'leite', 'açucar'];`
        ` let res = lista.join('-'); `

        RESULTADO: 'ovo-farinha-leite-açucar'


- O .indexOf(X) -> basicamente vai procurar um item X especifico do array, e vai retornar a posição que se encontra esse item X.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` let res = lista.indexOf('leite'); `

    RESULTADO: 2 -> lembrando que um array começa na posição 0, e se o item não fosse encontrado o resultado seria -1.


- O .pop() -> remove o ultimo item do array.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` lista.pop(); `
        ` let res = lista; `
        
        RESULTADO: ['ovo', 'farinha', 'leite']


- O .shift() -> remove o primeiro item do array.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` lista.pop(); `
        ` let res = lista; `
        
        RESULTADO: ['farinha', 'leite', 'açucar']

- O .push(X) -> adiciona um item X do array.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` lista.push('manteiga'); `
        ` let res = lista; `
        
        RESULTADO: ['ovo','farinha', 'leite', 'açucar', 'manteiga']


- É possível alterar um item do array passando a posição e atribuindo o valor, se a posição passada não existir, ele cria um novo item.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` lista[0] = 'ovos'; `
        ` lista[4] = 'prato'; `
        ` let res = lista; `
        
        RESULTADO: ['ovos','farinha', 'leite', 'açucar', 'prato']


- O .splice(X, Y) -> serve para remover um elemento do array, sendo X o index do item que deve começar a remover, e o Y é quantos itens deseja remover.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` lista.splice(1, 2); `
        ` let res = lista; `
        
        RESULTADO: ['ovo', 'açucar']


- O .concat(X) -> junta/concatena um item com outro.

    Ex: ` let lista = ['ovo', 'farinha', 'leite', 'açucar']; `
        ` let lista2 = ['prato', 'batedeira', 'forno']; `
        ` let res = lista.concat(lista2); `
        
        RESULTADO: ['ovo', 'farinha', 'leite', 'açucar', 'prato', 'batedeira', 'forno']


- O `.sort()` -> ordena o array em ordem alfabetica

- O `.map(function(){ })` -> vai mapear e gerar outro array.      (exemplo 1 em metodos_de_array.js)

- O `.filter(function(){ })` -> roda uma função que retorna true ou false, e é extremamente útil.     (exemplo 2 em metodos_de_array.js)

- O `.every(function(){ })` -> roda uma função que retorna true se todos os itens satisfazerem o que foi pedido, caso contrário retorna false. 

- O `.some(function(){ })` -> se existir pelo menos um que satisfaça o que foi pedido ele retorna true, caso contrário retorna false.

- O `.find(function(){ })` -> vai procurar um item dentro do array.       (exemplo 4 em metodos_de_array.js)

- O `.findIndex(function(){ })` -> vai procurar um item dentro do array e retornar sua posição.


# DATAS

- Os meses no javaScript começam do zero, portanto deve-se prestar muita atenção nisso.
- As semanas no javaScript começam no domingo e também do zero.


- Para consulta somente o ano `.getFullYear();`

- Para consulta somente o mês `.getMonth();`

- Para consulta somente o dia da semana `.getDay();` 

- Para consulta somente o dia/data  `.getDate();`

- Para consulta somente as horas `.getHours();` 

- Para consulta somente os minutos `.getMinutes();`

- Para consulta somente os segundos `.getSeconds();` 

- **OBS:** logicamente que para inserir um novo valor em qualquer um dos citados basta trocar o get por set.


# MATEMÁTICA

- Para calculos matematicos com o valor de PI, cosseno, seno, tangete, etc, será usado a biblioteca **Math**.

- Arredondar valores `Math.round(ex: 3.67);` -> arredonda para cima ou para baixo dependendo da casa décimal.

- Arredondar valores para baixo `Math.floor();` 

- Arredondar valores para cima `Math.ceil();`

- Saber o valor absoluto de um número `Math.abs(ex: -9898);`

- O `Math.min(7, 3, 5, 8);` retorna o menor número passado.

- O `Math.max(7, 3, 5, 8);` retorna o maior número passado.

- O `Math.random()` normalmente é usada combinada com outra função para gerar números aleatórios.

    Ex: `let sorteio = Math.floor(Math.random() * 100);` -> gerando números entre 0 e 100.


# INTERVALOS 

- É possível configurar um código para rodar de X em X segundos/horas/minutos.