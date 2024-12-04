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

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones
    var botones = document.querySelectorAll('.botones');

    // Obtener el elemento de texto dinámico
    var textoDinamico = document.getElementById('texto-dinamico');

    // Obtener el contenedor de imágenes
    var contenedorImagen = document.getElementById('contenedorImagen');

    // Ocultar el contenedor de imágenes al principio
    contenedorImagen.style.display = 'none';

    // Asignar evento de click a cada botón
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            // Obtener el texto asociado al botón clickeado
            var texto = boton.getAttribute('data-texto');
            
            // Actualizar el texto dinámico
            textoDinamico.innerHTML = texto;

            // Limpiar el contenedor de imágenes
            contenedorImagen.innerHTML = "";

            // Verificar si el botón tiene imágenes asociadas
            if (boton.hasAttribute('data-imagen')) {
                // Obtener las imágenes y sus hipervínculos del atributo data-imagen
                var imagenes = JSON.parse(boton.getAttribute('data-imagen'));
                var hipervinculos = JSON.parse(boton.getAttribute('data-hipervinculo'));

                // Crear y agregar las imágenes con hipervínculos al contenedor
                for (var i = 0; i < imagenes.length; i++) {
                    var imagen = document.createElement('img');
                    imagen.src = imagenes[i];
                    imagen.alt = "Imagen del botón";

                    var enlace = document.createElement('a');
                    enlace.href = hipervinculos[i];
                    enlace.appendChild(imagen);

                    contenedorImagen.appendChild(enlace);
                }

                // Mostrar el contenedor de imágenes
                contenedorImagen.style.display = 'block';
            } else {
                // Ocultar el contenedor de imágenes si no hay imágenes asociadas
                contenedorImagen.style.display = 'none';
            }
        });
    });
});

