// Script para adicionar itens a uma lista ordenada
// e exibi-los na tela
        let itens = [];

        function adicionarItem() {
            const input = document.getElementById('itemInput');
            const item = input.value.trim();
            
            if (item) {
                itens.push(item);
                itens.sort(); // Ordena alfabeticamente
                
                const lista = document.getElementById('listaOrdenada');
                lista.innerHTML = itens.map(item => `<li>${item}</li>`).join('');
                
                input.value = ''; // Limpa o campo
            }
        }
