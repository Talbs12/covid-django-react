from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import CovidDataViews, CovidFormViews

urlpatterns = [
    path('covid-data/table', csrf_exempt(CovidDataViews.as_view())),
    path('covid-data/submit', csrf_exempt(CovidFormViews.as_view()))

]