from django.urls import path

from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('images', views.ImageViewSet)
urlpatterns = [
    path('', views.index, name='index'),
]