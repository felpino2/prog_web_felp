// let elementoNome = document.getElementById("nome").value;

let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//console.log(elementoNome);

function submeter() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    console.log(nome);
    console.log(idade);
    console.log(ValidateEmail(email));


} 

function ValidateEmail(email) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return (true)
  }
    alert("Email fake")
    return (false)
}