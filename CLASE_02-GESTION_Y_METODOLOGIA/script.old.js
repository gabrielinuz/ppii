document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // --- LÓGICA DE NAVEGACIÓN ---
    const navContainer = document.createElement('nav');
    navContainer.className = 'nav-controls';

    const currentPath = window.location.pathname;
    const slideMatch = currentPath.match(/slide(\d+)/);
    const currentId = slideMatch ? parseInt(slideMatch[1]) : 1;

    // ACTUALIZACIÓN: Ahora son 11 slides
    const totalSlides = 11; 

    // Lógica del botón de Inicio (Home)
    const btnHome = document.createElement('a');
    btnHome.textContent = '🏠 Inicio';
    btnHome.href = '../index.html';
    
    if (currentId === 1 || currentId === totalSlides) {
        btnHome.className = 'btn-home'; 
        navContainer.appendChild(btnHome);
    } else {
        btnHome.className = 'btn-home-top';
        body.appendChild(btnHome);
    }

    // Botón Anterior
    if (currentId > 1) {
        const btnPrev = document.createElement('button');
        btnPrev.textContent = '← Anterior';
        btnPrev.onclick = () => window.location.href = `slide${String(currentId - 1).padStart(2, '0')}.html`;
        navContainer.appendChild(btnPrev);
    }

    // Botón Siguiente
    if (currentId < totalSlides) {
        const btnNext = document.createElement('button');
        btnNext.textContent = 'Siguiente →';
        btnNext.onclick = () => window.location.href = `slide${String(currentId + 1).padStart(2, '0')}.html`;
        navContainer.appendChild(btnNext);
    }

    body.appendChild(navContainer);

    // --- ANIMACIONES DE CONTENIDO ---
    const mainContent = document.querySelector('section');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }

    // --- POBLADO DINÁMICO DE PREGUNTAS (CLASE 02) ---
    const questionsList = document.getElementById('clase02-questions');
    if (questionsList) {
        const questions = [
            "¿Es posible aplicar TDD en un modelo Waterfall puro? ¿Qué dificultades habría?",
            "¿Por qué el Pair Programming se considera más eficiente a largo plazo a pesar de duplicar el costo de horas-hombre inicial?",
            "¿En qué situaciones un proyecto en el ISFT 151 se beneficiaría más de Kanban que de Scrum?"
        ];

        questions.forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            li.style.marginBottom = "20px";
            questionsList.appendChild(li);
        });
    }
});