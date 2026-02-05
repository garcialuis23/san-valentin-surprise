document.addEventListener("DOMContentLoaded", function() {
    // FECHA OBJETIVO: 14 de Febrero a las 00:00:00
    // Nota: El mes es 1 porque en Javascript Enero=0, Febrero=1
    // Pon aquí el año actual o el que quieras
    const fechaObjetivo = new Date(2026, 1, 14, 0, 0, 0); 
    
    // Fecha actual
    const fechaActual = new Date();

    const pantallaBloqueo = document.getElementById('pantalla-bloqueo');
    const contenidoSorpresa = document.getElementById('contenido-sorpresa');

    // LÓGICA DE COMPROBACIÓN
    if (fechaActual >= fechaObjetivo) {
        // ¡YA ES LA FECHA! -> Desbloquear
        pantallaBloqueo.style.display = 'none';
        contenidoSorpresa.style.display = 'block';
        
        // Música opcional: Si quieres que suene música al abrirse, descomenta esto:
        // var audio = new Audio('tu-cancion.mp3');
        // audio.play();
        
    } else {
        // AÚN ES PRONTO -> Mantener bloqueado
        pantallaBloqueo.style.display = 'flex';
        contenidoSorpresa.style.display = 'none';
        
        console.log("Aún no es San Valentín. Faltan: " + (fechaObjetivo - fechaActual) + "ms");
    }
});