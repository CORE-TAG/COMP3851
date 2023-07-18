import os
from uuid import uuid4

from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


def path_and_rename(instance, filename):
    ext = filename.split('.')[-1]
    # generate filename
    filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('images/', filename)


class Magazine(models.Model):
    """
    Magazine refer to news, facilities and club
    """
    TYPE_CHOICE = (
        ("news", "News"),
        ("facilities", "Facilities"),
        ("clubs", "Clubs")
    )
    title = models.CharField(max_length=255, verbose_name='Title')
    content = RichTextUploadingField(verbose_name='Content')
    cover = models.ImageField(upload_to=path_and_rename, default=None, null=True, blank=True, verbose_name='Cover')
    type = models.CharField(choices=TYPE_CHOICE, max_length=255, verbose_name='Type')

    created_time = models.DateTimeField(auto_now_add=True, verbose_name='Created Time')
    update_time = models.DateTimeField(auto_now=True, verbose_name='Updated Time')

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.__str__()

    class Meta:
        db_table = 'magazine'
        verbose_name = 'Magazine'
        verbose_name_plural = verbose_name
