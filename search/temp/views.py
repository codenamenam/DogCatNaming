from rest_framework.response import Response
from .models import CatSearch, DogSearch
from rest_framework.views import APIView
from .serializers import CatSearchSerializer, DogSearchSerializer
from django.http import HttpResponse


class CatSearchListAPI(APIView):
    def get(self, request):
        breed = request.GET.get('breed')
        queryset = CatSearch.objects.filter(breed=breed)
        print(queryset)
        serializer = CatSearchSerializer(queryset, many=True)
        return Response(serializer.data)


class DogSearchListAPI(APIView):
    def get(self, request):
        breed = request.GET.get('breed')
        queryset = DogSearch.objects.filter(breed=breed)
        print(queryset)
        serializer = DogSearchSerializer(queryset, many=True)
        return Response(serializer.data)


def hi(request):
    return HttpResponse("Hi!")
