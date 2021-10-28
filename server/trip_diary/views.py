from django.http import HttpResponse
import django_filters
from rest_framework import viewsets, filters

from .models import Image
from .serializer import ImageSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")