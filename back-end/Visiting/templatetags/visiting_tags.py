from datetime import datetime, timedelta
from django import template
from Visiting.models import Visiting

register = template.Library()


@register.filter
def get_visiting(value):
    if value == 'day':
        return Visiting.objects.filter(created_time__gte=datetime.now() - timedelta(days=1)).count()
    elif value == 'week':
        return Visiting.objects.filter(created_time__gte=datetime.now() - timedelta(days=7)).count()
    elif value == 'month':
        return Visiting.objects.filter(created_time__gte=datetime.now() - timedelta(days=30)).count()
    elif value == 'total':
        return Visiting.objects.all().count()
    else:
        return "Unknown"
