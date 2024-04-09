var nome = prompt("Nome do estudante: ");
var nota1 = prompt("Primeira nota: ");
nota1 = parseFloat(nota1);
var nota2 = prompt("Segunda nota: ");
nota2 = parseFloat(nota2);

var media = (nota1 + nota2) / 2;
console.log(nome, " tem média:",media);