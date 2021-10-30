# Generated by Django 3.2.8 on 2021-10-29 16:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('trip_name', models.CharField(max_length=30)),
                ('trip_start', models.DateTimeField(verbose_name='The start of trip')),
                ('trip_end', models.DateTimeField(verbose_name='The end of trip')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='VisitHistry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
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
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
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
