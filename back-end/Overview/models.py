import os
from uuid import uuid4
from django.db import models


def path_and_rename(instance, filename):
    ext = filename.split('.')[-1]
    # generate filename
    filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('images/', filename)


class Overview(models.Model):
    image = models.ImageField(upload_to=path_and_rename, default=None, null=True, blank=True, verbose_name='Image')

    created_time = models.DateTimeField(auto_now_add=True, verbose_name='Created Time')
    update_time = models.DateTimeField(auto_now=True, verbose_name='Updated Time')

    def __str__(self):
        return self.image.name

    def __repr__(self):
        return self.__str__()

    class Meta:
        db_table = 'overview'
        verbose_name = 'overview'
        verbose_name_plural = verbose_name

