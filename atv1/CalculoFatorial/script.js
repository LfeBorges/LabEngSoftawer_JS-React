let numero = Number(prompt("Digite um número para calcular o fatorial: "));
let resultado = 1;

if (isNaN(numero)) {
	alert("Entrada inválida! Digite um número inteiro.");
} else {
	for (let i = 1; i <= numero; i++) {
		resultado *= i;
	}
	alert("Fatorial de " + numero + " é: " + resultado);
}