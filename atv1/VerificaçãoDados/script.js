let dado = prompt("Digite um dado:");

if (dado !== null) { 
    let verificarTipo = confirm("Você deseja verificar o tipo do dado informado?");
    
    if (verificarTipo) {
       
        if (!isNaN(dado) && dado.trim() !== "") {
            dado = Number(dado);
        }
        
        else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false") {
            dado = (dado.toLowerCase() === "true");
        }

        document.body.innerHTML = `<h1>O tipo do dado informado é: ${typeof dado}</h1>`;
    } else {
        document.body.innerHTML = "<h1>Dado não confirmado</h1>";
    }
}
