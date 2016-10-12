from django.contrib import admin


from api.models import Category, Piece, Artist, Collection


# Register your models here.

admin.site.register(Category)
admin.site.register(Piece)
admin.site.register(Collection)
admin.site.register(Artist)

