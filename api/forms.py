from django import forms

from .models import Piece

class PieceForm(forms.ModelForm):

    class Meta:
        model = Piece
        fields = ('name', 'category',  'lyrics',)