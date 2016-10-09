from django.conf.urls import url

from api.resources.pieces_resource import pieces_list, piece_by_id, update_piece
from api.resources.category_resource import category_list

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
    url(r'^pieces/(?P<piece_id>\d+)/$', piece_by_id, name='piece_by_id'),
    url(r'^pieces/update$', update_piece, name='update_piece'),
    url(r'^category/$', category_list, name='category_list'),
]