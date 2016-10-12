from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.core import serializers
import json
import os
@csrf_exempt
def getCredentials(request):

    access=os.environ.get('AWSACCESSKEY')
    secretkey=os.environ.get('AWSSECRETKEY')
    data = json.dumps({"accessKeyId":access,"secretAccessKey":secretkey})
    return HttpResponse(data)

