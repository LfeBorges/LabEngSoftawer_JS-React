function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
  
    document.getElementById("HoraAtualizada").innerText = `${horas}:${minutos}:${segundos}`;
    setTimeout(atualizarRelogio, 1000);
  }
  
  atualizarRelogio();
  