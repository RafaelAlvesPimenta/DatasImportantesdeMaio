from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('dia-das-maes/', views.dia_maes, name='dia_das_maes'),
    path('mes-das-noivas/', views.mes_noivas, name='mes_das_noivas'),
    path('formatura/', views.formatura, name='formatura'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)