document.addEventListener("DOMContentLoaded", function() {
    // FECHA OBJETIVO: 14 de Febrero a las 00:00:00
    // Nota: El mes es 1 porque en Javascript Enero=0, Febrero=1
    const fechaObjetivo = new Date(2026, 1, 14, 0, 0, 0); 
    
    // Fecha actual
    const fechaActual = new Date();

    const pantallaBloqueo = document.getElementById('pantalla-bloqueo');
    const contenidoSorpresa = document.getElementById('contenido-sorpresa');
    const modalMusica = document.getElementById('modal-musica');
    const btnEmpezar = document.getElementById('btn-empezar');
    const audioFondo = document.getElementById('audio-fondo');
    const controlMusica = document.getElementById('control-musica');

    // LÓGICA DE COMPROBACIÓN
    if (fechaActual >= fechaObjetivo) {
        // ¡YA ES LA FECHA! -> Desbloquear
        pantallaBloqueo.style.display = 'none';
        contenidoSorpresa.style.display = 'block';
        
        // Mostrar modal de música
        setTimeout(() => {
            modalMusica.style.display = 'flex';
        }, 500);
        
        // Botón para empezar la experiencia
        btnEmpezar.addEventListener('click', function() {
            // Cerrar modal con animación
            modalMusica.style.opacity = '0';
            setTimeout(() => {
                modalMusica.style.display = 'none';
            }, 500);
            
            // 🎵 Reproducir música de fondo
            audioFondo.volume = 0.4; // Volumen al 40%
            audioFondo.loop = true; // Asegurar que se repite
            audioFondo.play().catch(e => {
                console.log('No se pudo reproducir automáticamente:', e);
            });
            
            // Event listener para asegurar que la música se repite
            audioFondo.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            });
            
            // Mostrar control de música
            setTimeout(() => {
                controlMusica.style.display = 'flex';
            }, 1000);
            
            // 🎆 Lanzar efectos especiales
            setTimeout(() => {
                if (typeof lanzarConfeti !== 'undefined') {
                    lanzarConfeti();
                }
                if (typeof lanzarCorazones !== 'undefined') {
                    lanzarCorazones();
                }
            }, 300);
        });
        
        // Control de música (pausar/reanudar)
        let musicaPausada = false;
        controlMusica.addEventListener('click', function() {
            if (musicaPausada) {
                audioFondo.play();
                controlMusica.innerHTML = '🎵';
                controlMusica.title = 'Pausar música';
                musicaPausada = false;
            } else {
                audioFondo.pause();
                controlMusica.innerHTML = '🔇';
                controlMusica.title = 'Reanudar música';
                musicaPausada = true;
            }
        });
        
    } else {
        // AÚN ES PRONTO -> Mantener bloqueado
        pantallaBloqueo.style.display = 'flex';
        contenidoSorpresa.style.display = 'none';
        
        console.log("Aún no es San Valentín. Faltan: " + (fechaObjetivo - fechaActual) + "ms");
    }
});