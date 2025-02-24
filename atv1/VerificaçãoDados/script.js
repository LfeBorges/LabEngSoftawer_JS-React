let dado = prompt("Digite um dado:");

if (dado !== null) { 
    const verificarTipo = confirm("Você deseja verificar o tipo do dado informado?");
    
    if (verificarTipo) {
       
        if (!isNaN(dado) && dado.trim() !== "") {
            dado = Number(dado);
        }
        
        else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false") {
            dado = (dado.toLowerCase() === "true");
        }

         alert("O tipo do dado informado é: " + typeof dado);
    } else {
        alert("Dado não confirmado");
    }
}
