from rest_framework import serializers

from .models import Image,Trip,VisitHistry

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image_id', 'trip_id', 'date_of_shooting', 'file_name', 'location','user_id','importance','category_name')

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('trip_id', 'trip_name', 'trip_start', 'trip_end', 'trip_menber')

class  VisitHistrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('visitHistry_id', 'trip_id', 'place_visited', 'visit_start')
