
from django.core import serializers
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Category

###########################################
# Resource for operations with Category class
###########################################

@csrf_exempt
def category_list(request):
    category_list = Category.objects.all()
    return HttpResponse(serializers.serialize("json", category_list))
