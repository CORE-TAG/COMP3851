from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from .models import Transit
from .serializers import TransitSerializer, TransitDetailSerializer


class ElevatorViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Transit.objects.filter(type='elevator')

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return TransitDetailSerializer
        return TransitSerializer


class CircleLineViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Transit.objects.filter(type='circle-line')

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return TransitDetailSerializer
        return TransitSerializer


class DowntownLineViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Transit.objects.filter(type='downtown-line')

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return TransitDetailSerializer
        return TransitSerializer


class BusViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Transit.objects.filter(type='bus')

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return TransitDetailSerializer
        return TransitSerializer

