from django.contrib import admin

from .models import Image,Trip, VisitHistry,User,Category

admin.site.register(Image)
admin.site.register(Trip)
admin.site.register(VisitHistry)
admin.site.register(User)
admin.site.register(Category)