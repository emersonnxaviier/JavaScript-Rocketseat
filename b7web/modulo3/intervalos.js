/**Exemplo vai ser mostrar a hora atual atualizando cada segundo. */

function showTime() {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let text = h + ':' + m + ':' + s;

    document.querySelector('#demo').innerHTML = text;
}

// criar um timer para rodar a função de X em X segundos

let timer = setInterval(showTime, 1000); //vai rodar a função passada a cada 1000 milissegundos, ou seja, 1 segundo