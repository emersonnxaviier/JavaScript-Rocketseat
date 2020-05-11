


// var idade = parseInt(prompt('Digite sua idade: '), 10); -> aparece uma caixa pra digitar

function checaIdade(idade) {
    
    return new Promise(function(resolve, reject){

                if(idade >= 18){
                    resolve();
                }else{
                    reject();
    
        }
    });
    
   }
   checaIdade(10)
    .then(
        function(){
            console.log("Maior que 18");
        }
    ) 
    .catch(
        function() {
            console.log("Menor que 18");
        }
    );



