from django.db import models

# Create your models here.
from django.utils import timezone


class CovidData(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    date_of_birth = models.DateField(default=timezone.now)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    zipcode = models.CharField(max_length=200, null=True, blank=True)
    landline = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    infected = models.BooleanField()
    extra = models.CharField(max_length=200, null=True, blank=True)
