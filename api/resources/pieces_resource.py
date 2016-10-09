from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.core import serializers
from api.models import Piece, Collection
from django.shortcuts import get_list_or_404

###########################################
# Resource for operations with Piece class
###########################################

@csrf_exempt
def pieces_list(request):
    pieces_list = Piece.objects.all()
    return HttpResponse(serializers.serialize("json", pieces_list))

@csrf_exempt
def collection_by_artist(request, artist_name):
    collection = get_list_or_404(Collection.objects.filter(name=artist_name))
    return HttpResponse(serializers.serialize("json", collection))