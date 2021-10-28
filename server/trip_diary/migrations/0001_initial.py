# Generated by Django 3.2 on 2021-10-26 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('trip_id', models.IntegerField()),
                ('date_of_shooting', models.DateTimeField(verbose_name='date of shooting')),
                ('file_name', models.CharField(max_length=100)),
                ('places_visited', models.CharField(max_length=30)),
            ],
        ),
    ]
