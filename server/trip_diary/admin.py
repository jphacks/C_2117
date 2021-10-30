from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from .models import Image,Trip, VisitHistry,User,Category,User
from .resources import UserResource, ImageResource, TripResource, VisitHistryResource, CategoryResource




class UserAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = UserResource

class ImageAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = ImageResource

class TripAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = TripResource

class VisitHistryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = VisitHistryResource

class CategoryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = CategoryResource


admin.site.register(Image,ImageAdmin)
admin.site.register(Trip, TripAdmin)
admin.site.register(VisitHistry,VisitHistryAdmin)
admin.site.register(Category,CategoryAdmin)
admin.site.register(User, UserAdmin)