from django.urls import path

from . import views

urlpatterns = [
	path("", views.index, name = "borot"),
	path("<int:flight_id>/register", views.register, name = "register"),
	path("<int:flight_id>", views.flightt, name = "flightt")
]