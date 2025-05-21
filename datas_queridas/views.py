from django.shortcuts import render, redirect
from django.core.mail import send_mail


# Create your views here.
def home(request): 
    if request.method == 'POST':

        nome_user = request.POST.get('nome_user')
        email_user = request.POST.get('email_user')
        nome_destinatario = request.POST.get('nome_destinatario')
        email_destinatario = request.POST.get('email_destinatario')
        corpo_email = request.POST.get('assunto_email')
        tema = request.POST.get('tema')

        titulos = {
            'mother': 'Feliz dia das mães!❤️',
            'bride': 'Feliz mês das noivas!👰',
            'graduation': 'Feliz formatura!🎉',
        }
        titulo_email = titulos.get(tema, 'Ocasião não reconhecida')

        mensagem= f"""
                    Olá {nome_destinatario}, {nome_user}/{email_user} te enviou essa mensagme de {titulo_email}: 
                    {corpo_email}
        """

        send_mail(
            subject=titulo_email,
            message=mensagem,
            from_email='tecgestaosenai@gmail.com',
            recipient_list=[email_destinatario],
            fail_silently=False,
        )

    return render(request, 'index.html')

def dia_maes(request):
    return render(request, 'dia_das_mães.html')
def mes_noivas(request):
    return render(request, 'mês_das_noivas.html')
def formatura(request):
    return render(request, 'formatura.html')