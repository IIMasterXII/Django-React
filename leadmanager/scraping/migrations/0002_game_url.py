# Generated by Django 3.0.2 on 2020-01-29 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraping', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='url',
            field=models.CharField(default='', max_length=250, unique=True),
        ),
    ]
