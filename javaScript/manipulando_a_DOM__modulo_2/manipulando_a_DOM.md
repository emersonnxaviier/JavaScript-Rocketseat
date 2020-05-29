


# COMO O JAVASCRIPT FAZ PARA MANIPULAR A DOM.

 O que é a DOM ?

- Ela é basicamente a árvore de elementos do html, como uma div, button ...
  podendo manipular quando um botão é clicado, quando é passado o mouse por cima e muitas outras coisas.

# AULA TRABALHANDO COM A  DOM.

Como conseguir referênciar elementos da(o) DOM/html através do javaScript, e não simplesmente disparar eventos do html para o javaScript.

 **A primeira forma** de buscar o elemento na DOM através do javaScript, é dentro da <script> </script> criar uma variavél recebendo um `document.getElementById();`

OBS_1: o document é uma variavél global que refencia a DOM do código.
OBS_2: `.getElementsById('nome')` vai buscar na DOM/html o elemento que tem o id igual a 'nome'.

**A segunda forma** é com o `document.getElementsByTagName();`

OBS_1: nessa forma passamos diretamente a tag que queremos buscar, e retornará um vetor com todas as tags iguas existentes no codigo.


**A terceira forma** é a `document.getElementsByClassName();`

OBS_1: assim como a segunda forma ele sempre vai retornar um vetor.



 **mais importante/utilizado**

**A quarta forma** é utilizando o `document.querySelector();` -> retorna um único elemento.
                                      `document.querySelectorAll();` -> retorna todos existentes.

OBS_1: ele basicamente permite andar pela DOM, deixa percorrer até encontrar o elemento.

exe_1: `document.querySelector('div#app input');` -> quero procurar pelo input que está dentro da div com id igual a app.

exe_2: `document.querySelector('input[name=nome]');` -> procurar apartir dos atribtos do input,  os [] estão referenciando a uma propriedade do elemento.


# AULA LIDANDO COM ELEMENTOS

  Além de referenciar elementos da DOM através do javascrit, é possivel criar elementos através do javaScript.


# AULA ALTERANDO ESTILOS

É possivel controlar as estilizações css através do javaScript.

OBS_1: no css um width: 100px é passado com pixels, no javaScript apenas o width= '100px' ou apenas width= 100.

OBS_2: no css o background-color: #000 é escrito com hifen, no javaScript é backgroundColor= '#000'.
