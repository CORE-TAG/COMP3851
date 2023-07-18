from django.utils.deprecation import MiddlewareMixin


class VisitingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.path.startswith('/admin'):
            return
        from Visiting.models import Visiting
        Visiting.objects.create(path=request.path)

