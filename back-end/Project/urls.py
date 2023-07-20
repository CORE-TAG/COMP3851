"""
URL configuration for Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from Magazine import views as magazine_views
from RoomRental import views as room_views
from Overview import views as overview_views
from Transit import views as transit_views


router = DefaultRouter()
router.register('news', magazine_views.NewsViewSet, basename='news')
router.register('facilities', magazine_views.FacilitiesViewSet, basename='facilities')
router.register('clubs', magazine_views.ClubsViewSet, basename='clubs')
router.register('rooms', room_views.RoomViewSet, basename='room')
router.register('overviews', overview_views.OverviewViewSet, basename='overview')
router.register('elevator', transit_views.ElevatorViewSet, basename='elevator')
router.register('circle-line', transit_views.CircleLineViewSet, basename='circle-line')
router.register('downtown-line', transit_views.DowntownLineViewSet, basename='downtown-line')
router.register('bus', transit_views.BusViewSet, basename='bus')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api/', include(router.urls)),
    path('', magazine_views.index)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
