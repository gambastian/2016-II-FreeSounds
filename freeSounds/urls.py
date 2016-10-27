"""freeSounds URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from api.views import index,logout,login,register,profile,add_piece,library

urlpatterns = [
    url(r'^api/', include('api.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', index, name='index'),
    url(r'^logout$', logout, name='logout'),
    url(r'^login$', login, name='login'),
    url(r'^register', register,name='register'),
    url(r'^profile/(?P<id_user>\d+)$', profile, name='profile'),
    url(r'^pieces/add_piece/(?P<id_user>\d+)$', add_piece, name='add_piece'),
    url(r'^library/(?P<id_user>\d+)$', library, name='library'),
]
