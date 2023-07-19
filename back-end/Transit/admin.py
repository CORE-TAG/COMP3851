from django.contrib import admin
from .models import Transit


class TransitAdmin(admin.ModelAdmin):
    list_display = ("brief", "type", "created_time", "update_time")


admin.site.register(Transit, TransitAdmin)
