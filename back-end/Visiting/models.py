from django.db import models


class Visiting(models.Model):
    path = models.CharField(max_length=255, verbose_name='Name')

    created_time = models.DateTimeField(auto_now_add=True, verbose_name='Created Time')

    def __str__(self):
        return self.path

    def __repr__(self):
        return self.__str__()

    class Meta:
        db_table = 'visiting'
        verbose_name = 'visiting'
        verbose_name_plural = verbose_name

