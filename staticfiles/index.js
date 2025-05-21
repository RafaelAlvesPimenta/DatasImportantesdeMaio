document.addEventListener('DOMContentLoaded', function () {
    // Efeitos de hover nas imagens
    const imageLinks = document.querySelectorAll('.image-link');

    imageLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.querySelector('.overlay').style.opacity = '1';
        });

        link.addEventListener('mouseleave', function () {
            this.querySelector('.overlay').style.opacity = '0.9';
        });
    });

    // Animação ao rolar a página
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');

        if (scrollPosition > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Formulário de mensagem
    const messageForm = document.getElementById('message-form');
    const confirmation = document.getElementById('confirmation');
    const newMessageBtn = document.getElementById('new-message');

    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(messageForm);
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        fetch("", {
            method: "POST",
            headers: {
                'X-CSRFToken': csrfToken,
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    messageForm.classList.add('hidden');
                    confirmation.classList.remove('hidden');
                    confirmation.scrollIntoView({ behavior: 'smooth' });
                } else {
                    alert("Erro ao enviar o e-mail. Tente novamente.");
                }
            })
            .catch(error => {
                alert("Erro na conexão. Verifique sua internet ou tente mais tarde.");
                console.error(error);
            });
    });

    newMessageBtn.addEventListener('click', function () {
        messageForm.classList.remove('hidden');
        confirmation.classList.add('hidden');
        messageForm.reset();

        messageForm.scrollIntoView({ behavior: 'smooth' });
    });

    // Mudar tema do formulário baseado na seleção
    const themeSelect = document.getElementById('theme');

    themeSelect.addEventListener('change', function () {
        const theme = this.value;
        const form = document.getElementById('message-form');

        form.classList.remove('mother-theme', 'bride-theme', 'graduation-theme');

        if (theme === 'mother') {
            form.classList.add('mother-theme');
        } else if (theme === 'bride') {
            form.classList.add('bride-theme');
        } else if (theme === 'graduation') {
            form.classList.add('graduation-theme');
        }
    });

    // Adicionar classes de tema ao CSS dinamicamente
    const style = document.createElement('style');
    style.textContent = `
        .mother-theme {
            border-top: 4px solid #d4a5a5;
        }

        .bride-theme {
            border-top: 4px solid #f3d7ca;
        }

        .graduation-theme {
            border-top: 4px solid #a5b4d4;
        }

        .mother-theme button {
            background: linear-gradient(135deg, #d4a5a5 0%, #f3d7ca 100%);
        }

        .bride-theme button {
            background: linear-gradient(135deg, #f3d7ca 0%, #e8c7ba 100%);
        }

        .graduation-theme button {
            background: linear-gradient(135deg, #a5b4d4 0%, #c7d1e8 100%);
        }
    `;
    document.head.appendChild(style);
});
