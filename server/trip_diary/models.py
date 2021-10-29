from django.db import models

class User(models.Model): 
    user_name = models.CharField(max_length=30)
    def __str__(self):
        return self.user_name


#Tripモデル(id, trip_name, trip_start, trip_end)
class Trip(models.Model):
    trip_name = models.CharField(max_length=30)
    trip_start = models.DateTimeField('The start of trip')
    trip_end = models.DateTimeField('The end of trip')
    trip_menber = models.ManyToManyField(User)
    def __str__(self):
        return self.trip_name

#VisitHistryモデル(id, trip_id, places_visited_id, date_of_visit)
class VisitHistry(models.Model):
    trip_id = models.ForeignKey(Trip,on_delete=models.CASCADE)
    place_visited = models.CharField(max_length=30)
    visit_start = models.DateTimeField('The start of visit')
    def __str__(self):
        return self.place_visited

#Imageモデル(id, trip_id, date_of_shooting, file_name, placesVisited_id)
#primary_keyは未指定のため自動で生成される
class Image(models.Model):
    trip_id = models.ForeignKey(Trip,on_delete=models.CASCADE)
    date_of_shooting = models.DateTimeField('date of shooting')
    file_name = models.CharField(max_length=100)
    placesVisited_id = models.ForeignKey(PlaceVisited,on_delete=models.CASCADE)
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    importance = models.IntegerField()
    category_name = models.ManyToManyField(Category)
    def __str__(self):
        return self.file_name


class category(models.Model):
    category_name = models.CharField(max_length=30)
    def __str__(self):
        return self.place_visited