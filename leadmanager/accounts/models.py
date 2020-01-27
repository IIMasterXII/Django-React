from django.db import models
from django.contrib.auth.models import User

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    currency = models.IntegerField(default=1000)

User.account = property(lambda u: Account.objects.get_or_create(user=u)[0])