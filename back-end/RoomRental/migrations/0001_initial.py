# Generated by Django 4.2.3 on 2023-07-18 13:10

import RoomRental.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Name')),
                ('location', models.CharField(max_length=255, verbose_name='Location')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('image', models.ImageField(blank=True, default=None, null=True, upload_to=RoomRental.models.path_and_rename, verbose_name='image')),
                ('score', models.IntegerField(verbose_name='Score')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Price')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='Created Time')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='Updated Time')),
            ],
            options={
                'verbose_name': 'room',
                'verbose_name_plural': 'room',
                'db_table': 'room',
            },
        ),
    ]
