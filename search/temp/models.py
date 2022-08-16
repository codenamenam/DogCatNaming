from django.db import models

# django rest framework 쓰기 위한 model


class Search(models.Model):
    words = models.TextField()

    def __str__(self):
        return self.words
