function mostrarHora() {
    const data = new Date();
    const hora = data.toLocaleTimeString();
    alert(hora);

    setTimeout(mostrarHora, 1000);
}

mostrarHora();
