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

document.addEventListener("DOMContentLoaded", function() {
    var imagenes = document.querySelectorAll('.galeria-imagenes img');
    var indiceActual = 0;
    var intervalo; // Variable para almacenar el intervalo de tiempo para la rotación automática
    
    function mostrarImagen(indice) {
        imagenes.forEach(function(imagen) {
            imagen.style.opacity = '0'; // Ocultar todas las imágenes
        });
        
        imagenes[indice].style.opacity = '1'; // Mostrar la imagen seleccionada
    }
    
    function avanzarImagen() {
        clearInterval(intervalo); // Detener la rotación automática al avanzar manualmente
        indiceActual = (indiceActual + 1) % imagenes.length; // Obtener el índice de la siguiente imagen
        mostrarImagen(indiceActual); // Mostrar la siguiente imagen
        iniciarRotacionAutomatica(); // Reiniciar la rotación automática después de la interacción
    }
    
    function retrocederImagen() {
        clearInterval(intervalo); // Detener la rotación automática al retroceder manualmente
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length; // Obtener el índice de la imagen anterior
        mostrarImagen(indiceActual); // Mostrar la imagen anterior
        iniciarRotacionAutomatica(); // Reiniciar la rotación automática después de la interacción
    }
    
    function iniciarRotacionAutomatica() {
        intervalo = setInterval(avanzarImagen, 5000); // Rotar automáticamente cada 5 segundos
    }
    
    mostrarImagen(indiceActual); // Mostrar la primera imagen
    iniciarRotacionAutomatica(); // Iniciar la rotación automática al cargar la página
    
    // Agregar eventos de clic a los botones de avanzar y retroceder
    document.getElementById('boton-avanzar').addEventListener('click', avanzarImagen);
    document.getElementById('boton-retroceder').addEventListener('click', retrocederImagen);
});