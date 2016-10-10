from django.conf.urls import url

from api.resources.pieces_resource import pieces_list, piece_by_id, update_piece
from api.resources.category_resource import category_list
from api.resources.pieces_resource import pieces_list
from api.resources.awsS3_resource import getCredentials
from api.resources.pieces_resource import add_piece

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
    url(r'^pieces/(?P<piece_id>\d+)/$', piece_by_id, name='piece_by_id'),
    url(r'^pieces/update$', update_piece, name='update_piece'),
    url(r'^category/$', category_list, name='category_list'),
    url(r'^credentials/$', getCredentials, name='getCredentials'),
    url(r'^pieces/add_piece/$', add_piece, name='add_piece')
]