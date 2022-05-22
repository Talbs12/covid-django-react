# Generated by Django 4.0.4 on 2022-05-19 16:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('covidData', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CovidData_1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('date_of_birth', models.DateField(default=django.utils.timezone.now)),
                ('address', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('zipcode', models.CharField(max_length=200)),
                ('landline', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=200)),
                ('infected', models.BooleanField()),
                ('extra', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='CovidData',
        ),
    ]