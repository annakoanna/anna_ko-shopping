# Generated by Django 4.0.4 on 2022-07-31 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0005_cart_cartitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='product',
            field=models.ManyToManyField(to='main_app.product'),
        ),
    ]
