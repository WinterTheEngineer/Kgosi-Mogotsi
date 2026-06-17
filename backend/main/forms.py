from django import forms
from phonenumber_field.formfields import PhoneNumberField

class ContactForm(forms.Form):

    name = forms.CharField(max_length=255)
    service = forms.CharField(max_length=255)
    email = forms.EmailField()
    phone = PhoneNumberField(region="ZA")
    message = forms.CharField(widget=forms.Textarea)