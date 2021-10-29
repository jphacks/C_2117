# Generated by Django 3.2 on 2021-10-29 06:44

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('category_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('category_name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('trip_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('trip_name', models.CharField(max_length=30)),
                ('trip_start', models.DateTimeField(verbose_name='The start of trip')),
                ('trip_end', models.DateTimeField(verbose_name='The end of trip')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('user_name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='VisitHistry',
            fields=[
                ('visitHistry_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('place_visited', models.CharField(max_length=30)),
                ('visit_start', models.DateTimeField(verbose_name='The start of visit')),
                ('trip_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trip_diary.trip')),
            ],
        ),
        migrations.AddField(
            model_name='trip',
            name='trip_menber',
            field=models.ManyToManyField(to='trip_diary.User'),
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('image_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('date_of_shooting', models.DateTimeField(verbose_name='date of shooting')),
                ('file_name', models.CharField(max_length=100)),
                ('importance', models.IntegerField()),
                ('category_name', models.ManyToManyField(to='trip_diary.Category')),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trip_diary.visithistry')),
                ('trip_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trip_diary.trip')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trip_diary.user')),
            ],
        ),
    ]
