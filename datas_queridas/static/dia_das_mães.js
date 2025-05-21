document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Botão de corações
    document.getElementById('heartBtn').addEventListener('click', function() {
        // Criar múltiplos corações
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                createHeart(i);
            }, i * 200);
        }
    });
    
    // Efeito de hover nas flores
    document.querySelectorAll('.flower').forEach(flower => {
        flower.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotate(15deg) scale(1.2)';
        });
        
        flower.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

function createHeart(index) {
    const heart = document.createElement('div');
    const size = 15 + Math.random() * 15;
    const xPos = Math.random() * window.innerWidth;
    
    heart.innerHTML = `<i class="fas fa-heart" style="color: #e91e63; font-size: ${size}px;"></i>`;
    heart.style.position = 'fixed';
    heart.style.bottom = '0';
    heart.style.left = xPos + 'px';
    heart.style.opacity = '1';
    heart.style.transition = `all ${3 + Math.random() * 2}s ease-out`;
    heart.style.zIndex = '1000';
    heart.style.transform = 'translateY(0)';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.opacity = '0';
        heart.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
    }, 10);
    
    setTimeout(() => {
        if(heart.parentNode) heart.remove();
    }, 5000);
}