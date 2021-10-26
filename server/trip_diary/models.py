from django.db import models

#Imageモデル(id, trip_id, date_of_shooting, file_name, places_visited)
#primary_keyは未指定のため自動で生成される
class Image(models.Model):
    trip_id = models.IntegerField()
    date_of_shooting = models.DateTimeField('date of shooting')
    file_name = models.CharField(max_length=100)
    places_visited_id = models.IntegerField()

#Tripモデル(id, name, start, end)
class Trip(models.Model):
    name = models.CharField(max_length=30)
    start = models.DateTimeField('The start of trip')
    end = models.DateTimeField('The end of trip')

#PlaceVisitedモデル(id, name)
class PlaceVisited(models.Model):
    name = models.CharField(max_length=30)

#VisitHistryモデル(id, trip_id, places_visited_id, date_of_visit)
class VisitHistry(models.Model):
    trip_id = models.IntegerField()
    place_visited_id = models.IntegerField()
    date_of_visit = models.DateTimeField('The date of visit')
