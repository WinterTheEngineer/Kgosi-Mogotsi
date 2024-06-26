from django.shortcuts import render


# Create your views here.

def index(request):

    context = {
        'page_title': 'Home'
    }

    return render(request, "WinterMogotsi/index.html", context)


def education(request):

    context = {
        'page_title': 'Education'
    }

    return render(request, "WinterMogotsi/education.html", context)


def contact(request):

    context = {

    }

    return render(request, "WinterMogotsi/contact.html", context)