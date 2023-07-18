from django.contrib import admin
from .models import Magazine


class MagazineAdmin(admin.ModelAdmin):
    list_display = ("title", "type", "cover", "created_time", "update_time")


admin.site.register(Magazine, MagazineAdmin)
