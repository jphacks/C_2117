from django.contrib import admin

from .models import Image,Trip,PlaceVisited,VisitHistry

admin.site.register(Image)
admin.site.register(Trip)
admin.site.register(PlaceVisited)
admin.site.register(VisitHistry)