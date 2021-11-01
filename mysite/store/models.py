from django.db import models


class Mobile(models.Model):
    id = models.AutoField(primary_key=True)
    last_updated = models.DateTimeField(auto_now=True)
    product_title = models.CharField(max_length=40)
    thumbnail = models.URLField(max_length=200)
    processor = models.CharField(max_length=40)
    RAM = models.CharField(max_length=40)
    screen_size = models.CharField(max_length=40)
    color = models.CharField(max_length=40)
    description = models.TextField()
    price = models.CharField(max_length=40)

    def __str__(self):
        return self.product_title


class Laptop(models.Model):
    id = models.AutoField(primary_key=True)
    last_updated = models.DateTimeField(auto_now=True)
    product_title = models.CharField(max_length=40)
    thumbnail = models.URLField(max_length=200)
    processor = models.CharField(max_length=40)
    RAM = models.CharField(max_length=40)
    HD_capacity = models.CharField(max_length=40)
    description = models.TextField()
    price = models.CharField(max_length=40)

    def __str__(self):
        return self.product_title


class Book(models.Model):
    id = models.AutoField(primary_key=True)
    last_updated = models.DateTimeField(auto_now=True)
    product_title = models.CharField(max_length=50)
    thumbnail = models.URLField(max_length=200)
    author = models.CharField(max_length=50)
    pages = models.IntegerField()
    description = models.TextField()
    price = models.CharField(max_length=50)

    def __str__(self):
        return self.product_title
