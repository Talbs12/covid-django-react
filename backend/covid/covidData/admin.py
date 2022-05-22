from django.contrib import admin

# Register your models here.
from .models import CovidData
admin.site.register(CovidData)