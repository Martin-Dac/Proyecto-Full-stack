from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Pelicula)
admin.site.register(models.Principal)
admin.site.register(models.Actor)