from dataclasses import field
from rest_framework import serializers
from .models import CatSearch, DogSearch


class CatSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatSearch
        fields = '__all__'


class DogSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogSearch
        fields = '__all__'
