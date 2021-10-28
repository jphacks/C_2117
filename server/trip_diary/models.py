from django.db import models

#Tripモデル(id, trip_name, trip_start, trip_end)
class Trip(models.Model):
    trip_name = models.CharField(max_length=30)
    trip_start = models.DateTimeField('The start of trip')
    trip_end = models.DateTimeField('The end of trip')
    def __str__(self):
        return self.trip_name

#PlaceVisitedモデル(id, name)
class PlaceVisited(models.Model):
    placeVisited_name = models.CharField(max_length=30)
    def __str__(self):
        return self.placeVisited_name

class User(models.Model): 
    user_name = models.CharField(max_length=30)
    def __str__(self):
        return self.user_name

#Imageモデル(id, trip_id, date_of_shooting, file_name, placesVisited_id)
#primary_keyは未指定のため自動で生成される
class Image(models.Model):
    trip_id = models.ForeignKey(Trip,on_delete=models.CASCADE)
    date_of_shooting = models.DateTimeField('date of shooting')
    file_name = models.CharField(max_length=100)
    placesVisited_id = models.ForeignKey(PlaceVisited,on_delete=models.CASCADE)
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    importance = models.IntegerField()
    def __str__(self):
        return self.file_name

#VisitHistryモデル(id, trip_id, places_visited_id, date_of_visit)
class VisitHistry(models.Model):
    trip_id = models.ForeignKey(Trip,on_delete=models.CASCADE)
    place_visited = models.ForeignKey(PlaceVisited,on_delete=models.CASCADE)
    date_of_visit = models.DateTimeField('The date of visit')
    def __str__(self):
        return self.place_visited