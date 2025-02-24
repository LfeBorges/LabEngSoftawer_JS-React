function verificarPalindromo() {
    var texto = prompt("Digite uma palavra ou frase:");  
    var textoInvertido = "";  

    for (var i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    if (texto === textoInvertido) {
        alert("A palavra ou frase é um palíndromo!");
    } else {
        alert("A palavra ou frase não é um palíndromo.");
    }
}

verificarPalindromo();
