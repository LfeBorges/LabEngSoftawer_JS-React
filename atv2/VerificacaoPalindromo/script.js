function verificarPalindromo(frase) {
    frase = frase.replace(/\s/g, '').toLowerCase();
    return frase === frase.split('').reverse().join('');
}

const entrada = prompt("Digite uma palavra ou frase:");
if (verificarPalindromo(entrada)) {
    alert(`'${entrada}' é um palíndromo!`);
} else {
    alert(`'${entrada}' não é um palíndromo.`);
}
