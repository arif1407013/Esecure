from django.urls import path
from . import views as main_views

urlpatterns = [
	path('home/', main_views.home, name='main_home'),
]