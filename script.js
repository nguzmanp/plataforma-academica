// Asegurarnos de que el documento HTML haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar el botón por su ID
    const botonComenzar = document.getElementById('btn-comenzar');
    
    // Agregar un evento de clic al botón
    botonComenzar.addEventListener('click', function() {
        alert('¡Excelente! Has configurado correctamente los archivos del repositorio.');
        console.log('Botón presionado. Git y GitHub listos para la acción.');
    });
    
});