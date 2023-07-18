from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Magazine
from .serializers import NewSerializer, FacilitiesSerializer, ClubsSerializer, MagazineDetailSerializer


class NewsViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Magazine.objects.filter(type='news')
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MagazineDetailSerializer
        else:
            return NewSerializer


class FacilitiesViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Magazine.objects.filter(type='facilities')
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MagazineDetailSerializer
        else:
            return FacilitiesSerializer


class ClubsViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Magazine.objects.filter(type='clubs')
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MagazineDetailSerializer
        else:
            return ClubsSerializer
