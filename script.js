// let elementoNome = document.getElementById("nome").value;

let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
/* azAZ-_.@azAZ-.azAZ.test(string)
 começa e termina com /regex/.test(email)
 /[a-zA-Z0-9]/.test(email)
 \w = A-Za-z0-9_
 validação inicia no começo do texto ^ e termina no final do texto $ valida do começo ao final da string, nao valida substring
 /^[\w]+@[\w].+[a-zA-Z]+$/
 significa \w, considera .- no meio pode ou nao (? significa 0 e no max 1 pode ou nao existir ) e depois \w, pois tem que ter letra apos caracter especial 
 seguidos ou seja nao pode luis.. mas pode luis. porque [\.-]
 * = 0 ou N vezes
 \w{2,3} caracteres w so pode do tamanho 2 a 3
*/


//console.log(elementoNome);


function submeter() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    console.log(nome);
    console.log(idade);
    console.log(email)
    console.log(ValidateEmail(email));


} 

function ValidateEmail(email) {
 if (emailRegex.test(email)){
    return (true)
  }
    alert("Email fake")
    return (false)
}
