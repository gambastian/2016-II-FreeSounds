from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import get_list_or_404
from django.core import serializers
from api.models import Piece

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

