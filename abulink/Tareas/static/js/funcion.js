function toggleOptions(element) {
    // Busca el dropdown asociado y alterna su visibilidad
    const dropdown = element.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function changeStatus(button, status) {
    const taskItem = button.closest('.task-item');
    const statusElement = taskItem.querySelector('.status');

    // Cambia el icono de estado según el botón presionado
    if (status === 'checked') {
        statusElement.textContent = '✔';
        statusElement.className = 'status checked';
    } else if (status === 'unchecked') {
        statusElement.textContent = '✖';
        statusElement.className = 'status unchecked';
    } else if (status === 'warning') {
        statusElement.textContent = '!';
        statusElement.className = 'status warning';
    }

    // Oculta el dropdown después de seleccionar una opción
    const dropdown = taskItem.querySelector('.options-dropdown');
    dropdown.style.display = 'none';
}

// Cierra el dropdown si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.status')) {
        const dropdowns = document.querySelectorAll('.options-dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
};
