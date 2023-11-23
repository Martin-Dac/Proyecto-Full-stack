from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Pelicula
from .serializers import PeliculaSerializer

# Create your views here.

@api_view(['GET'])
def ListaPeliculas(request):
    try: 
        nombre = request.query_params.get('nombre', None)

        if nombre:
            peliculas = Pelicula.objects.filter(primaryTitle__icontains=nombre)
        else:
            peliculas = Pelicula.objects.all()

        serializer = PeliculaSerializer(peliculas, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)