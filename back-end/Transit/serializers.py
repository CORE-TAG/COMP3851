from rest_framework import serializers
from .models import Transit


class TransitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transit
        fields = ('id', 'brief', 'image')


class TransitDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transit
        fields = ('id', 'brief', 'image', 'detail', 'created_time', 'update_time')

