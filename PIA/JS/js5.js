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

document.querySelectorAll(".botonEnlace").forEach(function(boton) {
    boton.addEventListener("click", function() {
        var enlace = boton.getAttribute("data-enlace");
        window.location.href = enlace;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var botones = document.querySelectorAll('.boton-expandible');
    var contenedorExpandible = document.querySelector('.contenedor-expandible');
    var textoExpandible = document.getElementById('texto-expandible');
    var imagenExpandible = document.getElementById('imagen-expandible');

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var texto = boton.getAttribute('data-texto');
            var imagen = boton.getAttribute('data-imagen');
            textoExpandible.innerText = texto;
            imagenExpandible.src = imagen;
            contenedorExpandible.style.display = 'block';
            imagenExpandible.style.display = 'block';
            imagenExpandible.style.margin = 'auto'; // Centrar horizontalmente la imagen

            // Ocultar los demás botones, excepto el que se le dio clic
            botones.forEach(function(botonOtro) {
                if (botonOtro !== boton) {
                    botonOtro.style.display = 'none';
                }
            });
        });
    });

    document.getElementById('cerrar').addEventListener('click', function() {
        contenedorExpandible.style.display = 'none';

        // Mostrar todos los botones cuando se cierra el contenedor expandible
        botones.forEach(function(boton) {
            boton.style.display = 'inline-block';
        });
    });
});