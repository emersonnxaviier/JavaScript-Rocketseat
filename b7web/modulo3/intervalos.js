/**Exemplo_1
 * 
Mostrar a hora atual atualizando cada segundo. */

// vai receber os botoes do html.
var btnComecar = document.getElementById('comecar');
var btnParar = document.getElementById('parar');

let timer;

//função que iniciará  a contagem. 
btnComecar.onclick = function() {
    timer = setInterval(showTime, 1000); //vai rodar a função passada a cada 1000 milissegundos, ou seja, 1 segundo.
}

//função que irá parar a contagem.
btnParar.onclick = function() {

    clearInterval(timer);
    document.querySelector('#demo').innerHTML = '';
}

//função que vai mostrar a hora.
function showTime() {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let text = ` ${h}:${m}:${s} `;

    document.querySelector('#demo').innerHTML = text;
}