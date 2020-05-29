

# AULA REQUISIÇÕES AJAX

-   O AJAX é uma requisição assincrona que realiza a algum back-end, então no javaScript ao invés de recarregar a página para trazer as novas informações do servidor podemos utilizar o AJAX  que é uma forma de requisitar informações do servidor sem precisar atualizar a página.

-   O AJAX é a principal forma de consumir informações do servidor pelo javaScript.

**Para começar uma requisição AJAX**

-   Define uma variavel recebendo o new XHTMLHttpRequest(); 

-   Essa classe XHTMLHttpRequest() do javaScript é quem nos da acesso a funcionalidade do AJAX para poder recuperar uma informação de algum servidor.

-   Servidor utilizado no exemplo é o servidor do github, a api do github para estar retornando as informações do usuário, e o que vamos perceber é que a página não precisará recarregar para retornar as informações.

-   ` xhr(nomeDaVariavel).open('GET', 'https://api.github.com/users/emersonnxaviier'); ` -> No primeiro parametro, como vai buscar informações o metodo é GET e o segundo a URL que vei buscar os dados.

**Como identificar no javaScript que uma requisição terminou ?**

-   Uma requisiçao assincrona não acontece no mesmo fluxo do script, e o javaScript não pode esperar a requisição terminar para executar o resto do código. Então para isso utiliza o `xhr(nomeDaVariavel).onreadystatechange` recebendo uma função e nela fazando uma verificação para em seguida retornar as informações ficando `xhr(nomeDaVariavel).onreadystatechange = function(){ if(xhr.readyState === 4){ console.log(JSON.parse(xhr.responseText));}` no if é usado o 4 porque é quando a resposta da requisição volta para você.


# AULA PROMISES

-   As promises(promessas) são códigos que não vão influenciar na linha do tempo do código javaScript, elas são funções que vão devolver o resultado seja ele de sucesso ou erro só depois de um tempo sem precisar se preocupar quando esse valor será retornado, por que o javaScript continuará executando normalmente.

-   A promise é uma Class.

-   resolve -> quando o resultado for de sucesso.

-   reject  -> quando o resultado for de erro.

-   .then vai ser executado quando chamar o resolve na promise.

-   .catch vai ser executado quando chamar o reject na promise.

# AULA UTILIZANDO AXIOS (aprender a utilizar a biblioteca axios para fazer as requisições assincronas no javaScript)

-   O AXIOS irá substituri o new XHTMLHttpRequest(); 

-   Por baixo dos panos o AXIOS é uma `new XHTMLHttpRequest();` mas o AXIOS irá ajudar a retornar os valores de forma mais facil.

**instalar o AXIOS**

-   No HTML antes de importar o(s) arquivo(s) de javaScript importa o AXIOS para ele já está importado quando for utilizar,        `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`



