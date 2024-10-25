
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.db import IntegrityError
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import requires_csrf_token

def home(request):
    return render(request, 'Tareas/home.html')

def Principal(request):
    return render(request, 'Tareas/index.html')

def inicio (request):
    
    return render(request, 'Tareas/Inicio_sesion.html', {"form": AuthenticationForm})
    

def Registro (request):
    return render(request, 'Tareas/Registro.html', {"form": UserCreationForm})

def inicio_sesion(request):
    if request.method == 'GET':
        return render(request, 'Tareas/Inicio_sesion.html', {"form": AuthenticationForm})
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'Tareas/Inicio_sesion.html', {"form": AuthenticationForm, "error": "Username or password is incorrect."})

        login(request, user)
        return redirect('Principal')
