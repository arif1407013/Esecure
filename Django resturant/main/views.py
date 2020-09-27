from django.shortcuts import render, redirect

# Create your views here.
def home(request):
	if not request.user.is_authenticated:
		return redirect('/login')
	else:
		context = {
			"message": "welcome"
		}
		return render(request, 'main/main.html', context)