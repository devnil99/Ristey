# Generated by Django 5.1.1 on 2025-07-11 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('risteyapp', '0054_remove_userdata_mobile_no'),
    ]

    operations = [
        migrations.AddField(
            model_name='devtransactions',
            name='ifsc_code',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='stafftransactions',
            name='ifsc_code',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='usertransactions',
            name='ifsc_code',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
