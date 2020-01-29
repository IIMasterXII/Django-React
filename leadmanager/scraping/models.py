from django.db import models
from django.utils import timezone

class Game(models.Model):
    url = models.CharField(max_length=250, unique=True, default='')
    title = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    home_team = models.CharField(max_length=250)
    away_team = models.CharField(max_length=250)
    created_date = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']
    class Admin:
        pass
