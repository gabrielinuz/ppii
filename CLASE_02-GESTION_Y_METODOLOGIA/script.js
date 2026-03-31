document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    // Identificación de la diapositiva actual basada en la URL
    const currentPath = window.location.pathname;
    const slideMatch = currentPath.match(/slide(\d+)/);
    const currentId = slideMatch ? parseInt(slideMatch[1]) : 1;

    // --- CONFIGURACIÓN GLOBAL ---
    // Límite estricto de diapositivas según el temario
    const totalSlides = 11; 

    // --- CONSTRUCCIÓN DE NAVEGACIÓN ---
    const navContainer = document.createElement('nav');
    navContainer.className = 'nav-controls';

    // Instanciación del botón de retorno al Dashboard
    const btnHome = document.createElement('a');
    btnHome.textContent = 'Inicio';
    btnHome.href = '../index.html';
    
    // Regla de renderizado: El botón 'Inicio' cambia de posición si es el principio/fin de la presentación
    if (currentId === 1 || currentId === totalSlides) {
        btnHome.className = 'btn-home'; 
        navContainer.appendChild(btnHome);
    } else {
        btnHome.className = 'btn-home-top';
        body.appendChild(btnHome);
    }

    // --- LÓGICA DE RUTEO ---
    const goPrev = () => {
        if (currentId > 1) {
            window.location.href = `slide${String(currentId - 1).padStart(2, '0')}.html`;
        }
    };

    const goNext = () => {
        if (currentId < totalSlides) {
            window.location.href = `slide${String(currentId + 1).padStart(2, '0')}.html`;
        }
    };

    // Botones de interfaz gráfica (UI)
    if (currentId > 1) {
        const btnPrev = document.createElement('button');
        btnPrev.textContent = '← Anterior';
        btnPrev.onclick = goPrev;
        navContainer.appendChild(btnPrev);
    }

    if (currentId < totalSlides) {
        const btnNext = document.createElement('button');
        btnNext.textContent = 'Siguiente →';
        btnNext.onclick = goNext;
        navContainer.appendChild(btnNext);
    }

    body.appendChild(navContainer);

    // --- ACCESIBILIDAD Y CONTROL POR TECLADO ---
    // Permite el uso de flechas de teclado o presentadores inalámbricos
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goPrev();
        if (e.key === 'ArrowRight') goNext();
    });

    // --- ANIMACIONES DE CONTENIDO ---
    const mainContent = document.querySelector('section');
    if (mainContent) {
        // Asegúrate de tener declarada la clase .fade-in en tu CSS o transitions.js
        mainContent.classList.add('fade-in'); 
    }
});
