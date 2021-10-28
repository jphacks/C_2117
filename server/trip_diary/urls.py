from django.urls import path

from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'images', views.ImageViewSet)
router.register(r'images/<int:user_id>', views.ImageViewSet)
urlpatterns = [
    path('', views.index, name='index'),
]