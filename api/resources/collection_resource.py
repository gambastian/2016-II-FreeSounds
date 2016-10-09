import json


from django.core import serializers
from django.http import HttpResponseRedirect, HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import get_list_or_404, get_object_or_404
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from api.models import Collection


@csrf_exempt
def create_collection(request):
    if request.method == 'POST':
        jsonUser = json.loads(request.body)
        pname = jsonUser['body']['name']

    try:
        collection = Collection.objects.create(name=pname)
        if collection is not None:
            mensaje = "ok"
        else:
            mensaje = "La coleccion no fue creada"
        return JsonResponse({"mensaje": mensaje})
    except ValueError as error:
        return JsonResponse({"mensaje": "fallo la creacion"})
