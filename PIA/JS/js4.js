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

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const filtroEstadosBtn = document.getElementById('filtroEstadosBtn');
    const opcionesEstados = document.getElementById('opcionesEstados');

    // Mostrar/Ocultar opciones de estados al hacer clic en el botón del filtro
    filtroEstadosBtn.addEventListener('click', function() {
        opcionesEstados.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxesEstados = document.querySelectorAll('.filtro-estados input[type="checkbox"]');
    const checkboxesTipo = document.querySelectorAll('.filtro-tipo input[type="checkbox"]');
    const palabraClaveInput = document.getElementById('palabraClave');

    checkboxesEstados.forEach(function(checkbox) {
        checkbox.addEventListener('change', aplicarFiltros);
    });

    checkboxesTipo.forEach(function(checkbox) {
        checkbox.addEventListener('change', aplicarFiltros);
    });

    palabraClaveInput.addEventListener('input', aplicarFiltros);

    function aplicarFiltros() {
        const palabraClave = palabraClaveInput.value.trim().toLowerCase();
        const estadosSeleccionados = obtenerSeleccionados(checkboxesEstados);
        const tiposSeleccionados = obtenerSeleccionados(checkboxesTipo);
    
        const filas = document.querySelectorAll('.tabla-datos tbody tr');
        filas.forEach(function(fila) {
            const nombre = fila.cells[0].textContent.toLowerCase();
            const tipo = fila.cells[1].textContent.toLowerCase();
            const direccion = fila.cells[2].textContent.toLowerCase();
            const estado = fila.cells[3].textContent.toLowerCase();
            
            const coincidePalabra = nombre.includes(palabraClave) || tipo.includes(palabraClave) || direccion.includes(palabraClave) || estado.includes(palabraClave);
            const coincideEstado = estadosSeleccionados.length === 0 || estadosSeleccionados.includes(estado);
            const coincideTipo = tiposSeleccionados.length === 0 || tiposSeleccionados.includes(tipo);
    
            if (coincidePalabra && coincideEstado && coincideTipo) {
                fila.style.display = 'table-row';
            } else {
                fila.style.display = 'none';
            }
        });
    }

    function obtenerSeleccionados(checkboxes) {
        const seleccionados = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                seleccionados.push(checkbox.value.toLowerCase());
            }
        });
        return seleccionados;
    }
});