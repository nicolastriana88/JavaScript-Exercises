function saludar() {
    var nombre = prompt("Escriba su nombre");
    if (nombre) {
      console.log(`¡Hola ${nombre}!`);
    } else {
      console.log("¡Hola, invitado!");
    }
  }
  saludar();