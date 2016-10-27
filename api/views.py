from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import get_list_or_404
from .models import Artist, ArtistaForm, UserForm,PieceForm,Category,Piece
from django.shortcuts import render
from django.contrib import messages
from django.contrib import auth

@csrf_exempt
def index(request):
    Artists = Artist.objects.all()
    form_artist = ArtistaForm(request.POST)
    form_user = UserForm(request.POST)

    context = {'artists': Artists,
               'form_artist': form_artist, 'form_user': form_user, 'base_url': settings.STATIC_URL}
    return render(request, 'index.html', context)

def login(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)
    if user is not None:
        auth.login(request, user)
        messages.success(request, "Welcome {}".format(username), extra_tags="alert-success")
        return HttpResponseRedirect('/')
    else:
        messages.error(request, "Username or Password are incorrect", extra_tags="alert-danger")
        return HttpResponseRedirect('/')


def logout(request):
    auth.logout(request)
    messages.info(request, "Logout Successful", extra_tags="alert-info")
    return HttpResponseRedirect('/')

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = User.objects.create_user(username=username, password=password)
        user.first_name = request.POST.get('name')
        user.last_name = request.POST.get('last_name')
        user.email = request.POST.get('email')
        user.save()

        new_artist=Artist(name=request.POST['name'],
                          last_name=request.POST['last_name'],
                          name_artistic=request.POST.get('name_artistic'),
                          country=request.POST.get('country'),
                          city=request.POST.get('city'),
                          email=request.POST.get('email'),
                          avatar=request.FILES['avatar'],
                          userId=user)
        new_artist.save()

    return HttpResponseRedirect('/')

def profile(request,id_user):
    artista=Artist.objects.get(userId=id_user)
    if request.method == 'POST':
        # formulario enviado
        form_artist = ArtistaForm(request.POST, request.FILES, instance=artista)

        if form_artist.is_valid():
            # formulario validado correctamente
            form_artist.save()
            return HttpResponseRedirect('/profile/'+id_user)

    else:
        # formulario inicial
        form_artist = ArtistaForm(instance=artista)

    context = {'form_artist': form_artist, 'artista': artista, 'id_user' : id_user}
    return render(request, 'profile.html', context)

def add_piece(request,id_user):
    artista = Artist.objects.get(userId=id_user)
    if request.method=='POST':
        form_piece = PieceForm(request.POST, request.FILES, instance=artista)
        if form_piece.is_valid():
            new_piece=Piece(
                name=request.POST['name'],
                url=request.POST['url'],
                image_cover=request.FILES['image_cover'],
                duration=request.POST['duration'],
                category=Category.objects.get(pk=request.POST.get('category')),
                artist=artista,
                lyrics = request.POST['lyrics'],
            );
            new_piece.save();
            return HttpResponseRedirect('/')
    else:
        # formulario inicial
        form_piece = PieceForm()

    context = {'form_piece': form_piece, 'id_user': id_user}
    return render(request, 'addPiece.html', context)

def library(request,id_user):
    artista = Artist.objects.get(userId=id_user)
    pieces = get_list_or_404(Piece.objects.filter(artist=artista))
    context = {'pieces': pieces, 'id_user': id_user}
    return render(request, 'library.html', context)