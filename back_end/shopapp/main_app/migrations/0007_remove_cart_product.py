# Generated by Django 4.0.4 on 2022-07-31 20:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0006_cart_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='product',
        ),
    ]