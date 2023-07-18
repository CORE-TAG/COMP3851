from collections import OrderedDict

from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Overview
from .serializers import OverviewSerializer


class OverviewViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Overview.objects.all()
    serializer_class = OverviewSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def list(self, request, *args, **kwargs):
        result = super().list(request, *args, **kwargs)
        data = []
        for d in result.data:
            data.append(d.get('image'))
        result.data = data
        return result

