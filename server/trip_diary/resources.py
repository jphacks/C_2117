from import_export.resources import ModelResource
from import_export.formats import base_formats
from import_export import fields
from import_export.widgets import ManyToManyWidget,DateWidget

from .models import Image,Trip, VisitHistry,User,Category,User

class UserResource(ModelResource):
    class Meta:
        model = User
        fields = ("id","user_name",)


class ImageResource(ModelResource):
    class Meta:
        model = Image

class TripResource(ModelResource):
    trip_menber=fields.Field(attribute='trip_menber', widget=ManyToManyWidget(User), column_name='trip_menber')
    trip_start=fields.Field(attribute='trip_start', column_name='trip_start', widget=DateWidget('"%Y/%d/%m"'))
    class Meta:
        model = Trip
        fields =('id','trip_name', 'trip_start', 'trip_end', 'trip_menber',)

class VisitHistryResource(ModelResource):
    class Meta:
        model = VisitHistry

class CategoryResource(ModelResource):
    class Meta:
        model = Category


