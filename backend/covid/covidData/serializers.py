from rest_framework import serializers

from .models import CovidData


class CovidDataSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=200)
    last_name = serializers.CharField(max_length=200)
    date_of_birth = serializers.DateField()
    address = serializers.CharField(max_length=200)
    city = serializers.CharField(max_length=200)
    zipcode = serializers.CharField(max_length=200, allow_null=True, allow_blank=True,required=False)
    landline = serializers.CharField(max_length=200)
    phone = serializers.CharField(max_length=200)
    infected = serializers.BooleanField()
    extra = serializers.CharField(max_length=200, allow_null=True, allow_blank=True)

    class Meta:
        model = CovidData
        fields = ('__all__')
