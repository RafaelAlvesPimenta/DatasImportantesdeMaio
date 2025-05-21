document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Botão de corações
    document.getElementById('heartBtn').addEventListener('click', function() {
        // Criar múltiplos corações
        for(let i = 0; i < 15; i++) {
            setTimeout(() => {
                createHeart(i);
            }, i * 150);
        }
    });
    
    // Efeito nos anéis decorativos
    document.querySelectorAll('.ring').forEach(ring => {
        ring.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(20deg)';
        });
        
        ring.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

function createHeart(index) {
    const heart = document.createElement('div');
    const size = 20 + Math.random() * 20;
    const xPos = Math.random() * window.innerWidth;
    const colors = ['#d4af37', '#e8c39e', '#ffffff', '#f8d7a3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    heart.innerHTML = `<i class="fas fa-heart" style="color: ${randomColor}; font-size: ${size}px;"></i>`;
    heart.style.position = 'fixed';
    heart.style.bottom = '0';
    heart.style.left = xPos + 'px';
    heart.style.opacity = '0.9';
    heart.style.transition = `all ${4 + Math.random() * 3}s ease-out`;
    heart.style.zIndex = '1000';
    heart.style.transform = 'translateY(0) rotate(0deg)';
    heart.style.filter = 'drop-shadow(0 0 5px rgba(0,0,0,0.2))';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.opacity = '0';
        heart.style.transform = `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;
    }, 10);
    
    setTimeout(() => {
        if(heart.parentNode) heart.remove();
    }, 7000);
}