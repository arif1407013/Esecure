from django.db import models

# Create your models here.

class airport(models.Model):
	code = models.CharField(max_length = 4)
	city = models.CharField(max_length = 64)

	def __str__(self):
		return f"({self.code}){self.city}"

class flight(models.Model):
	origin = models.ForeignKey(airport, on_delete = models.CASCADE, related_name = "departure")
	destination = models.ForeignKey(airport, on_delete = models.CASCADE, related_name = "arrival")
	duration = models.IntegerField()

	def __str__(self):
		return f"{self.id}  :  from {self.origin} to {self.destination} within {self.duration}"

class passenger(models.Model):
	name = models.CharField(max_length=64)
	flights = models.ManyToManyField(flight, blank = True, related_name = "passengers")

	def __str__(self):
		return f"passenger name : {self.name}"