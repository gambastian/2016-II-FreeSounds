from django.conf.urls import url

from api.resources.pieces_resource import pieces_list
from api.resources.artist_resource import create_artist

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
    url(r'^createArtist/$', create_artist, name='create_artist'),
]