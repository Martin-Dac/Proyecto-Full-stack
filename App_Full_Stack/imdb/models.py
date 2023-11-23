from django.db import models

class Pelicula(models.Model):
    tconst = models.CharField(max_length=20, primary_key=True)
    titleType = models.CharField(max_length=10)
    primaryTitle = models.CharField(max_length=255)
    originalTitle = models.CharField(max_length=255)
    isAdult = models.BooleanField(default=False)
    startYear = models.CharField(max_length=10)
    endYear = models.CharField(max_length=10, blank=True, null=True)
    runtimeMinutes = models.IntegerField(blank=True, null=True)
    genres = models.CharField(max_length=255)

class Actor(models.Model):
    nconst = models.CharField(max_length=20, primary_key=True)
    primaryName = models.CharField(max_length=255)
    birthYear = models.IntegerField(blank=True, null=True)
    deathYear = models.IntegerField(blank=True, null=True)

class Principal(models.Model):
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE, related_name='principals')
    actor = models.OneToOneField(Actor, on_delete=models.CASCADE, primary_key=True)
    ordering = models.IntegerField()
    category = models.CharField(max_length=50)
    job = models.CharField(max_length=255, blank=True, null=True)
    characters = models.TextField(blank=True, null=True)
