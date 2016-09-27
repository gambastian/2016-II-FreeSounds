from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.core import serializers
from api.models import Piece

###########################################
# Resource for operations with Piece class
###########################################

@csrf_exempt
def pieces_list(request):
    pieces_list = Piece.objects.all()
    return HttpResponse(serializers.serialize("json", pieces_list))
