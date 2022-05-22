from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
from .models import CovidData
from .serializers import CovidDataSerializer


class CovidDataViews(APIView):

    def post(self, request):
        items = CovidData.objects.all()
        serializer = CovidDataSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)


class CovidFormViews(APIView):

    def post(self, request):
        serializer = CovidDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
