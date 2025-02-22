from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('contact', views.contact, name="contact"),
        path("download-resume/", views.download_resume, name="download_resume"),
]