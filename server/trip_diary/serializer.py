from rest_framework import serializers

from .models import Image,Trip,VisitHistry

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('trip_id', 'date_of_shooting', 'file_name', 'location','user_id','importance','category_name')

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('trip_name', 'trip_start', 'trip_end', 'trip_menber')

class  VisitHistrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('trip_id', 'place_visited', 'visit_start')
