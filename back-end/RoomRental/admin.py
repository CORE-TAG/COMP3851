from django.contrib import admin
from .models import Room


class RoomAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "location", "score", "price", "created_time", "update_time")


admin.site.register(Room, RoomAdmin)
