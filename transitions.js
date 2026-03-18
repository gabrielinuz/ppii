document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 1. Efecto de Entrada (Fade-in)
    // Aplicamos un estilo inicial por JS para asegurar la transición
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease-in-out';
    
    // Forzamos el redibujado y mostramos
    setTimeout(() => {
        body.style.opacity = '1';
    }, 50);

    // 2. Efecto de Salida (Fade-out) al navegar
    const links = document.querySelectorAll('a, button.btn:not(.btn-disabled)');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const destination = this.href || this.onclick;
            
            // Si es un enlace externo o un botón sin destino real, ignoramos
            if (!destination || destination.includes('#') || this.target === '_blank') return;

            e.preventDefault();
            body.style.opacity = '0';

            setTimeout(() => {
                // Si el destino es un string de URL (de un <a>)
                if (typeof destination === 'string') {
                    window.location.href = destination;
                } else {
                    // Si es una función (como los botones de navegación de las slides)
                    this.click(); 
                }
            }, 500);
        });
    });
});