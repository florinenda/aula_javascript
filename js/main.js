
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal");
 // ou   window.location.href = "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
}

 function trocar(elemento){
     //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
     elemento.innerHTML = "Obrigado por passar o mouse";
  //   alert("trocar texto");
 }

function voltar(){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

//function soma(n1, n2){
 //   return n1 + n2;
//}

/*
function validaIdade(idade){
    var validar;
if (idade >= 18){
    validar = true
}else{
    validar = false
}
return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade))
*/  

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai japão", "Japão", "Brasil"));
*/


/*
var d = new Date();
alert(d.getMonth()+1)
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count = count + 1;
};
*/


//var idade = prompt("Qual é sua idade");
//if (idade >= 18){
//    alert("maior de idade");
//}else{alert("menor de idade");
//}console.log(idade);



//var frutas = [{nome:"maçã", cor:"verde"}, {nome:"manga", cor:"laranja"}]
//console.log(frutas)
//alert(frutas[1].nome)


//var fruta = {nome:"maçã", cor:"verde"}
//console.log(fruta.nome)


//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");]
//lista.pop()

//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

//alert(lista[1])
//var nome = "Florine N'da";
//var idade = 24;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos." )
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2)
//console.log(frase.toUpperCase())
//console.log(frase.replace("Japão", "Brasil"))
