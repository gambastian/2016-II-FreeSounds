import json

import sys
from django.contrib.auth.models import User
from django.core import serializers
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import get_list_or_404, get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from api.models import Piece, Category,Artist

###########################################
# Resource for operations with Piece class
###########################################

@csrf_exempt
def pieces_list(request):
    pieces_list = Piece.objects.all()
    return HttpResponse(serializers.serialize("json", pieces_list))

@csrf_exempt
def piece_by_id(request, piece_id):
    piece = get_list_or_404(Piece.objects.filter(pk = piece_id))
    return HttpResponse(serializers.serialize("json", piece))

@csrf_exempt
def update_piece(request):
    if request.method == "POST":
        jsonPiece = json.loads(request.body)
        piece_id = jsonPiece['body']['pk']
        pieces = get_list_or_404(Piece.objects.filter(pk=piece_id))
        if len(pieces) == 0:
            return JsonResponse({"mensaje": "There are no pieces with id" + piece_id})
        else:
            name = jsonPiece['body']['fields']['name']
            url = jsonPiece['body']['fields']['url']
            image_cover = jsonPiece['body']['fields']['image_cover']
            duration = jsonPiece['body']['fields']['duration']
            category = jsonPiece['body']['fields']['category']
            lyrics = jsonPiece['body']['fields']['lyrics']

            selected_piece = pieces[0]

            if name is not None:
                selected_piece.name = name
            if url is not None:
                selected_piece.url = url
            if image_cover is not None:
                selected_piece.image_cover = image_cover
            if duration is not None:
                selected_piece.duration = duration
            if category is not None:
                cat = get_object_or_404(Category, pk = category)
                selected_piece.category = cat
            if lyrics is not None:
                selected_piece.lyrics = lyrics

            selected_piece.save()

            return JsonResponse({"mensaje": "successfully updated"})

@csrf_exempt
def add_piece(request):
    if request.method=='POST':
        jsonPiece = json.loads(request.body)
        new_piece=Piece(
            name=jsonPiece['body']['name'],
            url=jsonPiece['body']['sound'],
            image_cover=jsonPiece['body']['cover'],
            duration=jsonPiece['body']['duration'],
            category=get_object_or_404(Category.objects.filter(id=jsonPiece['body']['category'])),
            artist=Artist.objects.get(username=jsonPiece['body']['artist']),
        );
        new_piece.save();
        return HttpResponse(serializers.serialize("json", [new_piece]))