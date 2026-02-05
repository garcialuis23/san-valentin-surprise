const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');

// Redirección al SÍ
btnSi.addEventListener('click', () => {
    // Alerta opcional
    // alert("¡Sabía que dirías que sí! ❤️"); 
    window.location.href = 'plan.html';
});

// Lógica del botón NO
const moverBoton = () => {
    // 1. Aseguramos que el botón tenga posición 'fixed' para que se mueva respecto a la pantalla
    btnNo.classList.add('no-movil');
    
    // Obtenemos las dimensiones de la ventana y del botón
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    const anchoBoton = btnNo.offsetWidth;
    const altoBoton = btnNo.offsetHeight;

    // --- CORRECCIÓN MATEMÁTICA ---
    // El espacio disponible es el ancho de la pantalla MENOS el ancho del botón
    // Le restamos 20px extra para que no se pegue al borde del todo (margen de seguridad)
    const maximoX = anchoVentana - anchoBoton - 20;
    const maximoY = altoVentana - altoBoton - 20;

    // Generamos números aleatorios dentro de ese límite seguro
    // Math.max(0, ...) es por si la pantalla es muy pequeña, que no de error
    const aleatorioX = Math.random() * Math.max(0, maximoX);
    const aleatorioY = Math.random() * Math.max(0, maximoY);

    // Aplicamos la posición con un pequeño margen de 10px para que no quede pegado arriba/izquierda
    btnNo.style.left = `${aleatorioX + 10}px`;
    btnNo.style.top = `${aleatorioY + 10}px`;

    // 2. CAMBIAR FORMA Y COLOR (Lo mantenemos igual)
    const colores = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#333', '#800080'];
    const formas = ['50px', '0px', '20px 0 20px 0', '50%']; 
    const rotacion = Math.random() * 360;

    const colorRandom = colores[Math.floor(Math.random() * colores.length)];
    const formaRandom = formas[Math.floor(Math.random() * formas.length)];

    btnNo.style.backgroundColor = colorRandom;
    btnNo.style.color = 'white';
    btnNo.style.borderRadius = formaRandom;
    btnNo.style.transform = `rotate(${rotacion}deg)`;
    
    // Frases troll
    const frases = ["¡No!", "¿Segura?", "¡Error!", "¡Di que sí!", "Nope", ":("];
    btnNo.innerText = frases[Math.floor(Math.random() * frases.length)];
};

// Activar en PC y Móvil
btnNo.addEventListener('mouseenter', moverBoton);

// En móvil usamos 'touchstart' para que reaccione nada más tocarlo
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Esto evita que el móvil intente hacer "click" real
    moverBoton();
});