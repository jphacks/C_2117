from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'images', views.ImageViewSet)
router.register(r'trip', views.TripViewSet)
urlpatterns = [
    path('', views.index, name='index'),
]
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#urlpatterns += staticfiles_urlpatterns()