from django.conf.urls import url

from api.resources.pieces_resource import pieces_list
from api.resources.collection_resource import create_collection

urlpatterns=[
    url(r'^pieces/$', pieces_list, name='pieces_list'),
    url(r'^artist/$', pieces_list, name='pieces_list'),
    url(r'^createCollections/$', create_collection, name='create_collection'),
    ##url(r'^collectionsList/$', collection_list, name='collection_list'),
]