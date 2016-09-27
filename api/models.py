from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=60)

class Artist(User):
    genre = models.CharField(max_length=60)

class Piece(models.Model):
    name = models.CharField(max_length=60)
    url = models.CharField(max_length=100, null=True, blank=True)
    image_cover = models.CharField(max_length=100)
    duration = models.IntegerField(null=False)
    category = models.ForeignKey(Category, null=True, blank=True)
    artist = models.ForeignKey(Artist, null=True)

