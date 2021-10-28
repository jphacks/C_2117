from django.contrib import admin

from .models import Image,Trip,PlaceVisited,VisitHistry,User

admin.site.register(Image)
admin.site.register(Trip)
admin.site.register(PlaceVisited)
admin.site.register(VisitHistry)
admin.site.register(User)