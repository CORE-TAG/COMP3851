from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from .models import Room
from .serializers import RoomSerializer


class RoomViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
