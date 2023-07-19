# Generated by Django 4.2.3 on 2023-07-19 15:46

import Transit.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Transit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brief', models.TextField(verbose_name='Brief')),
                ('detail', models.TextField(verbose_name='Detail')),
                ('image', models.ImageField(blank=True, default=None, null=True, upload_to=Transit.models.path_and_rename, verbose_name='Image')),
                ('type', models.CharField(choices=[('elevator', 'Elevator'), ('circle -line', 'CircleLine'), ('downtown-line', 'DowntownLine'), ('bus', 'Bus')], max_length=255, verbose_name='Type')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='Created Time')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='Updated Time')),
            ],
            options={
                'verbose_name': 'Transit',
                'verbose_name_plural': 'Transit',
                'db_table': 'transit',
            },
        ),
    ]
