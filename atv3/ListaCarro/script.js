document.getElementById('carForm').addEventListener('submit', function (e) {
	e.preventDefault();

	const carro = {
		marca: document.getElementById('marca').value,
		modelo: document.getElementById('modelo').value,
		ano: parseInt(document.getElementById('ano').value),
		cor: document.getElementById('cor').value,
		kilometragem: parseInt(document.getElementById('km').value),
		valorFipe: parseFloat(document.getElementById('fipe').value),

		anosUtilizacao: function () {
			const anoAtual = new Date().getFullYear();
			return anoAtual - this.ano;
		},

		valorMercado: function () {
			const anos = this.anosUtilizacao() || 1;
			const kmPorAno = this.kilometragem / anos;

			if (kmPorAno <= 30000) return this.valorFipe * 1.10;
			if (kmPorAno <= 50000) return this.valorFipe;
			return this.valorFipe * 0.90;
		}
	};

	const resultado = document.getElementById('resultado');
	resultado.innerHTML = `
        <h3>Resultado:</h3>
        <p>Anos de utilização: ${carro.anosUtilizacao()}</p>
        <p>Valor de mercado: R$ ${carro.valorMercado().toFixed(2)}</p>
    `;

	this.reset();
});