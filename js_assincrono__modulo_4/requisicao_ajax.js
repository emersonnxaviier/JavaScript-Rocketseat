
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');  //como vai buscar informações, o metodo é get e em seguida o endereço de busca
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){   // 4 pq é quando a resposta da requisição volta para você.
        console.log(JSON.parse(xhr.responseText)); // utilizamos JSON.parse pois a resposa que retorna é um JSON, é no formato JSON.
    }
}