from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    
    full_name = models.CharField(max_length=100, default="default _name")
    phone_number = models.IntegerField(unique=True, null=True)
    bvn = models.IntegerField(unique=True, null=True)