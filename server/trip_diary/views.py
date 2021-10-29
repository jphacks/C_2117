from django.http import HttpResponse
import django_filters
from rest_framework import viewsets, filters
from django.http import FileResponse

from .models import Image,Trip,VisitHistry
from .serializer import ImageSerializer, TripSerializer, VisitHistrySerializer

#ユーザがいった旅のリスト
#旅の名前, 日付, 参加したユーザ
class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.order_by('date_of_shooting')
    serializer_class = ImageSerializer
    filter_fields = ('user_id', 'trip_id','category_name')

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    filter_fields = ('trip_menber','trip_name')

class VisitHistryViewSet(viewsets.ModelViewSet):
    queryset = VisitHistry.objects.order_by('visit_start')
    serializer_class = VisitHistrySerializer
    filter_fields = ('trip_id','trip_name')

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")