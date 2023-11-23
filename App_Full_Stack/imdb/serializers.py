from rest_framework import serializers
from .models import Pelicula, Principal,Actor

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'

class PrincipalSerializer(serializers.ModelSerializer):
    actor = ActorSerializer()

    class Meta:
        model = Principal
        fields = '__all__'

class PeliculaSerializer(serializers.ModelSerializer):
    principals = PrincipalSerializer(many=True, read_only=True)

    class Meta:
        model = Pelicula
        fields = '__all__'