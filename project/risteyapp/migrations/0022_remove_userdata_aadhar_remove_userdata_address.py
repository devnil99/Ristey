# Generated by Django 4.2.10 on 2025-05-17 11:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('risteyapp', '0021_userdata_instagram'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdata',
            name='aadhar',
        ),
        migrations.RemoveField(
            model_name='userdata',
            name='address',
        ),
    ]
