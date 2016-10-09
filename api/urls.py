from django.conf.urls import url

from api.resources.pieces_resource import pieces_list, piece_by_id, update_piece
from api.resources.artist_resource import create_artist

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
    url(r'^pieces/(?P<piece_id>\d+)/$', piece_by_id, name='piece_by_id'),
    url(r'^pieces/update$', update_piece, name='update_piece'),
    url(r'^createArtist/$', create_artist, name='create_artist'),
]