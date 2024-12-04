// JavaScript para manejar el panel de accesibilidad
document.getElementById("accesibilidadBtn").addEventListener("click", function() {
    // Mostrar el panel de accesibilidad
    document.getElementById("panelAccesibilidad").style.display = "block";
});

// Evento para cerrar el panel de accesibilidad
document.getElementById("cerrarPanel").addEventListener("click", function() {
    // Ocultar el panel de accesibilidad
    document.getElementById("panelAccesibilidad").style.display = "none";
});

// Evento para ajustar el tamaño del texto
document.getElementById("tamañoTexto").addEventListener("input", function() {
    var tamaño = this.value + "px";
    // Aplicar el tamaño del texto a todos los elementos de texto en la página
    var elementosTexto = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a");
    elementosTexto.forEach(function(elemento) {
        elemento.style.fontSize = tamaño;
    });
});

// Evento para ajustar el contraste
document.getElementById("contraste").addEventListener("change", function() {
    var contraste = this.value;
    // Aplicar los estilos de contraste a la página
    if (contraste === "alto") {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    } else {
        document.body.style.backgroundColor = ""; // Revertir a los estilos originales
        document.body.style.color = ""; // Revertir a los estilos originales
    }
});
