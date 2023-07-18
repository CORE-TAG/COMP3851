from rest_framework import serializers
from .models import Magazine


# Even though those three type of magazine below is in the same model,
# but we still separate them into three different serializers,
# so than they are logically different for users
class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'title', 'cover', 'created_time', 'update_time')


class FacilitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'title', 'cover', 'created_time', 'update_time')


class ClubsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'title', 'cover', 'created_time', 'update_time')


class MagazineDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'title', 'content', 'cover', 'created_time', 'update_time')
