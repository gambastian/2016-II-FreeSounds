from __future__ import unicode_literals

from django import forms
from django.contrib.auth.models import User
from django.db import models
from django.forms import ModelForm

class Category(models.Model):
    name = models.CharField(max_length=60)

class Artist(models.Model):
    name = models.CharField(max_length=1000)
    last_name = models.CharField(max_length=1000)
    avatar = models.ImageField(upload_to='/static/avatars/', null=True, blank=True)
    name_artistic = models.CharField(max_length=50, blank=True)
    email = models.CharField(max_length=1000)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    birth_date = models.DateTimeField(null=True, blank=True)
    userId = models.OneToOneField(User, on_delete=models.CASCADE, null=True)


class Piece(models.Model):
    name = models.CharField(max_length=60)
    url = models.CharField(max_length=100, null=True, blank=True)
    image_cover = models.CharField(max_length=100)
    duration = models.IntegerField(null=False)
    category = models.ForeignKey(Category, null=True, blank=True)
    artist = models.ForeignKey(Artist, null=True, blank=True)
    lyrics = models.TextField(blank=True, null=True)

class Collection(models.Model):
    name = models.CharField(max_length=60)

class ArtistaForm(ModelForm):
    name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Name'})
    )
    last_name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'})
    )
    email = forms.CharField(
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email'})
    )
    avatar = forms.ImageField(
        widget=forms.FileInput(attrs={'class': 'form-control', 'placeholder': 'Avatar'})
    )
    name_artistic = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Artistic Name'}),
        label='Artistic Name'
    )
    birth_date = forms.DateField(
        widget=forms.TextInput(attrs={'class': 'form-control datepicker', 'placeholder': 'Birthdate'}),
        label='Birthdate'
    )

    city = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'City'})
    )
    country = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Country'})
    )


    class Meta:
        model = Artist
        fields = ['name', 'last_name', 'email', 'avatar', 'city', 'country', 'birth_date', 'name_artistic']


class UserForm(ModelForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        label='Username'
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
        label='Password'
    )

    class Meta:
        model = User
        fields = ['username', 'password']