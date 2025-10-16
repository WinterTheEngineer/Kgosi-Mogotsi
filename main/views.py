import os
import datetime
from dotenv import load_dotenv
from .forms import ContactForm
from google.cloud import storage
from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.conf import settings

load_dotenv()

def index(request):

    x = datetime.datetime.now()

    context = {
        'activeYear': x.year,
        'page_title': 'Home',
        'form': ContactForm
    }

    return render(request, "WinterMogotsi/index.html", context)

def contact(request):

    if request.method == "POST":

        form = ContactForm(request.POST)
        if form.is_valid():

            # extract and process form data
            name = form.cleaned_data['name']
            service = form.cleaned_data['service']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            message = form.cleaned_data['message']

            # format e-mail content
            subject = f"Contact Form Submission from {name}"
            body = (
                f"Name: {name}\n"
                f"Service Interested: {service}\n"
                f"Email: {email}\n"
                f"Phone: {phone}\n\n"
                f"Message:\n{message}"
            )

            sender = os.getenv("EMAIL_HOST_USER")
            recipient_list = [os.getenv("EMAIL_HOST_USER")]

            try:
                send_mail(subject, body, sender, recipient_list)
                messages.success(request, "Thanks for reaching out! I'll get back to you shortly.")
            except Exception as e:
                messages.error(request, f"An error occurred while sending your message. Try again later.")
            
            return redirect(index)
        
        else:
            messages.error(request, "There was an error with your form. Please try again.")
    
    return redirect('index')


def download_resume(request):
    pass

