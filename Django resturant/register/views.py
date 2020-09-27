from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate

from register.forms import SignUpForm

# Create your views here.
def register(request):
	if request.method == "POST":
		form = SignUpForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			password = form.cleaned_data.get('password1')
			user = authenticate(request, username = username, password = password)
			login(request, user)
			return redirect('/home')
	else:
		form = SignUpForm()
		context = {
			"form": form
		}
		return render(request, 'register/signin.html', context)