from rest_framework import serializers

from .models import Image,Trip,PlaceVisited,VisitHistry

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('trip_id', 'date_of_shooting', 'file_name', 'placesVisited_id','user_id','importance')
