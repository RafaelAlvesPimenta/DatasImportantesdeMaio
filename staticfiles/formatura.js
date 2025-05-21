document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Botão de confetes
    document.getElementById('confettiBtn').addEventListener('click', function() {
        createConfetti();
    });
    
    // Efeito nos ícones acadêmicos
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

function createConfetti() {
    const colors = ['#2c3e50', '#3498db', '#e74c3c', '#f1c40f', '#2ecc71'];
    const types = ['square', 'circle', 'triangle'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        
        confetti.style.position = 'fixed';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = '-20px';
        confetti.style.zIndex = '1000';
        confetti.style.opacity = '0.8';
        
        if (type === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (type === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = `${size/2}px solid transparent`;
            confetti.style.borderRight = `${size/2}px solid transparent`;
            confetti.style.borderBottom = `${size}px solid ${color}`;
        }
        
        document.body.appendChild(confetti);
        
        const animationDuration = Math.random() * 3 + 2;
        
        confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Adiciona a animação de confetes dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);