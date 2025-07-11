# Generated by Django 5.1.1 on 2025-07-05 16:20

import risteyapp.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('risteyapp', '0041_bankdetails'),
    ]

    operations = [
        migrations.CreateModel(
            name='DevTransactions',
            fields=[
                ('id', models.CharField(default=risteyapp.utils.secure_short_uuid, editable=False, max_length=22, primary_key=True, serialize=False)),
                ('user_id', models.CharField(max_length=25)),
                ('amount', models.IntegerField()),
                ('upi_id', models.CharField(blank=True, max_length=25, null=True)),
                ('bank_account', models.IntegerField(blank=True, null=True)),
                ('contact', models.IntegerField(blank=True, null=True)),
                ('date', models.DateField(auto_now=True)),
                ('type', models.CharField(max_length=10)),
                ('status', models.CharField(default='pending', max_length=8)),
            ],
        ),
        migrations.AlterField(
            model_name='bankdetails',
            name='user_id',
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
    ]
