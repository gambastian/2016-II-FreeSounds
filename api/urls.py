from django.conf.urls import url

from api.resources.pieces_resource import pieces_list

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
]