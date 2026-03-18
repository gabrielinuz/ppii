document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // --- LÓGICA DE NAVEGACIÓN ---
    const navContainer = document.createElement('nav');
    navContainer.className = 'nav-controls';

    // Obtener número de slide actual desde el nombre del archivo (ej: slide01.html)
    const currentPath = window.location.pathname;
    const slideMatch = currentPath.match(/slide(\d+)/);
    const currentId = slideMatch ? parseInt(slideMatch[1]) : 1;

    // Cambiar el límite cuando sea necesario:
    const totalSlides = 8; 

    // Botón para volver al Index (Solo en primera y última slide)
    if (currentId === 1 || currentId === totalSlides) {
        const btnHome = document.createElement('a');
        btnHome.textContent = '🏠 Inicio';
        btnHome.href = '../index.html';
        btnHome.className = 'btn-home'; 
        navContainer.appendChild(btnHome);
    }

    // Botón Anterior
    if (currentId > 1) {
        const btnPrev = document.createElement('button');
        btnPrev.textContent = '← Anterior';
        btnPrev.onclick = () => window.location.href = `slide${String(currentId - 1).padStart(2, '0')}.html`;
        navContainer.appendChild(btnPrev);
    }

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

    // Inserción de lógica para Slide 02
    const nodeLogic = document.getElementById('node-logic');
    if (nodeLogic) {
        const items = [
            "1. El Main Thread recibe la petición.",
            "2. Si es I/O (DB, Archivos), se envía al Worker Pool.",
            "3. El Main Thread queda libre para la siguiente petición.",
            "4. Al terminar, el Callback entra en la cola para ejecutarse."
        ];
        items.forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            nodeLogic.appendChild(li);
        });
    }
    
    // 2. Poblado de preguntas para la Slide 08
    const questionsList = document.getElementById('final-questions');
    if (questionsList) {
        const questions = [
            "¿Por qué el modelo de Node.js se considera más eficiente para aplicaciones con alta latencia de I/O comparado con C++ puro sin hilos?",
            "En el gráfico de la Slide 05: ¿Qué sucede con el 'Main Thread' cuando una tarea se delega al 'Worker Pool'?",
            "Analizando la tesis de Fielding: ¿Qué ventaja a largo plazo ofrece HATEOAS para la evolución de una API sin romper los clientes existentes?",
            "Desde una perspectiva de sostenibilidad: ¿Cómo influye la elección del entorno (C++ vs Node vs Apache) en el consumo de RAM del servidor?"
        ];

        questions.forEach(q => {
            const li = document.createElement('li');
            li.textContent = q;
            li.style.marginBottom = "15px";
            questionsList.appendChild(li);
        });
    }
});