# Generated by Django 4.2.3 on 2023-07-19 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RoomRental', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='score',
            field=models.FloatField(verbose_name='Score'),
        ),
    ]
