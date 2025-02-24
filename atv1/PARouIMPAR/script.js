var numero = prompt("Digite um número: ");
numero = Number(numero);

if (isNaN(numero)) {
	alert("Digite apenas números inteiros!");
} else if (numero < 0) {
	alert("O número " + numero + " é inválido");
} else if (numero % 2 === 0) {
	alert("O número " + numero + " é par");
} else {
	alert("O número " + numero + " é ímpar.");
}
