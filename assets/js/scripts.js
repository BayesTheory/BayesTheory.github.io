document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO CURSOR "LANTERNA" ---
    const spotlight = document.querySelector('.cursor-spotlight');
    window.addEventListener('mousemove', (e) => {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top = e.clientY + 'px';
    });


    // --- LÓGICA DO INTERRUPTOR DE TEMA (CORRIGIDA) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Função para aplicar o tema (seja do localStorage ou o inicial)
    function applyTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Salva a escolha
    }

    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Padrão para 'dark'
    applyTheme(savedTheme);

    // Adiciona o evento de clique ao botão
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });


    // --- LÓGICA DAS ANIMAÇÕES DE ENTRADA ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- LÓGICA DA NAVBAR INTELIGENTE ---
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            // Rolando para baixo
            navbar.classList.add('hidden-nav');
        } else {
            // Rolando para cima
            navbar.classList.remove('hidden-nav');
        }
        lastScrollY = window.scrollY;
    });
});