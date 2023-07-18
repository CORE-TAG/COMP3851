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
        if isinstance(result.data, list):
            iter = result.data
            result.data = []
            for d in iter:
                result.data.append(d.get('image'))
        else:
            iter = result.data.get('results')
            result.data['results'] = []
            for d in iter:
                result.data['results'].append(d.get('image'))
        return result

