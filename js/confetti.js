// Efecto de confeti cuando se desbloquea la página
function lanzarConfeti() {
    const duracion = 5 * 1000; // 5 segundos
    const animationEnd = Date.now() + duracion;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duracion);
        
        // Confeti desde la izquierda
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ff4d6d', '#ff758c', '#fecfef', '#ff9a9e', '#d63384', '#FFB6C1']
        }));
        
        // Confeti desde la derecha
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ff4d6d', '#ff758c', '#fecfef', '#ff9a9e', '#d63384', '#FFB6C1']
        }));
    }, 250);
}

// Función para lanzar corazones flotantes
function lanzarCorazones() {
    const duracion = 3000;
    const cantidad = 30;
    
    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            crearCorazon();
        }, i * 100);
    }
}

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.innerHTML = ['❤️', '💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
    corazon.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        font-size: ${Math.random() * 2 + 1}rem;
        z-index: 9999;
        pointer-events: none;
        animation: floatUp ${Math.random() * 3 + 2}s ease-out forwards;
    `;
    
    document.body.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// CSS para la animación de corazones
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
