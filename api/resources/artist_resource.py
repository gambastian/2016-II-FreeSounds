import json

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.core import serializers
from django.http import HttpResponseRedirect, HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import get_list_or_404, get_object_or_404
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from api.models import Artist


@csrf_exempt
def create_artist(request):
    if request.method == 'POST':
        jsonUser = json.loads(request.body)
        nombre = jsonUser['body']['nombre']
        apellido = jsonUser['body']['nombre']
        email = jsonUser['body']['email']
        username = jsonUser['body']['username']
        password = jsonUser['body']['password']

        if User.objects.filter(username=username).exists():
           return JsonResponse({"mensaje": "el usuario ya existe"})

        try:
            usuario = User.objects.create(first_name=nombre, last_name=apellido, email=email, username=username,
                                          password=password)
            artist = Artist.objects.create(user=usuario)
            if usuario is not None:
                mensaje = "ok"
            else:
                mensaje = "El usuario no fue creado"
            return JsonResponse({"mensaje": mensaje})
        except ValueError, error:
            return JsonResponse({"mensaje": "fallo la creacion"})