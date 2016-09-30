from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import get_list_or_404
from django.shortcuts import get_object_or_404
from django.core import serializers
from api.models import Piece
from api.forms import PieceForm

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
def piece_edit(request, piece_id):
    piece = get_object_or_404(Piece, pk=piece_id)
    if request.method == "POST":
        form = PieceForm(request.POST, instance=piece)
        if form.is_valid():
            piece = form.save(commit=False)
            piece.name = request.name
            piece.name = request.name
            piece.save()
            return HttpResponse(serializers.serialize("json", piece))
    else:
        form = PieceForm(instance=piece)
    return HttpResponse(serializers.serialize("json", piece))

