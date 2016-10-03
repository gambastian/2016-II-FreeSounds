from django.conf.urls import url

from api.resources.pieces_resource import pieces_list, piece_by_id

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
    url(r'^pieces/(?P<piece_id>\d+)/$', piece_by_id, name='piece_by_id'),
]