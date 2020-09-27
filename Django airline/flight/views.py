from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.urls import reverse

from .models import flight,passenger,airport

# Create your views here.

def index(request):
	context = {
		"Flights" : flight.objects.all()
	}
	return render(request, "flight/index.html", context)

def register(request, flight_id):
	try:
		passenger_id = int(request.POST["passenger"])
		pasenger = passenger.objects.get(pk=passenger_id)
		fliight = flight.objects.get(pk = flight_id)
	except KeyError:
		return render(request, "flight/error.html", {"message": "no passenger"})
	except passenger.DoesNotExist:
		return render(request, "flight/error.html", {"message": "no passenger"})
	except flight.DoesNotExist:
		return render(request, "flight/error.html", {"message": "no flight"})
	pasenger.flights.add(fliight)
	return HttpResponseRedirect(reverse("flightt", args=(flight_id, )))
def flightt(request, flight_id):
	try:
		result = flight.objects.get(pk=flight_id)
	except flight.DoesNotExist:
		raise Http404("flight doesn't exist")
	context = {
		"Flight":result,
		"Passengers":result.passengers.all(),
		"nonPassengers":passenger.objects.exclude(flights=result).all()
	}
	return render(request,"flight/flightt.html",context)