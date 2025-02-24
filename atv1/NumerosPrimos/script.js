const num = parseInt(prompt("Digite um número: "), 10);

switch (true) {
	case isNaN(num) || num <= 1:
		alert(num + " não é um número primo.");
		break;
	case num === 2 || num === 3:
		alert(num + " é um número primo.");
		break;
	case num % 2 === 0 || num % 3 === 0:
		alert(num + " não é um número primo.");
		break;
	default:
		let divisor = 0;
		for (let i = 5; i * i <= num; i += 2) {
			if (num % i === 0) {
				divisor = i;
				break;
			}
		}

		switch (divisor) {
			case 0:
				alert(num + " é um número primo.");
				break;
			default:
				alert(num + " não é um número primo.");
				break;
		}
}       