# Generated by Django 4.0.4 on 2022-08-01 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0015_remove_cart_product_remove_cart_quantity_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image2',
            field=models.TextField(default='', max_length=250),
        ),
    ]