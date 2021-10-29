from django.http import HttpResponse
import django_filters
from rest_framework import viewsets, filters
from django.http import FileResponse

from .models import Image,Trip
from .serializer import ImageSerializer, TripSerializer

#ユーザがいった旅のリスト
#旅の名前, 日付, 参加したユーザ
class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    filter_fields = ('user_id', 'trip_id')

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    filter_fields = ('trip_menber','trip_name')

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")