from django.shortcuts import render
from . models import *
from . serializers import *
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets  
from rest_framework import permissions 
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.contrib.auth.models import User
@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        try:
        isAuthenticated = User.is_authenticated
        if isAuthenticated:
            return Response({'isAuthenticated': 'success'})
        else:
            return Response('isAuthenticated': 'error')
    return Response({'error': 'Something went wrong during authenticated'})

@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permission_classes =(permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        re-password == data['re_password']
        try:
            if password == re_password:
                    if User.objects.filter(username=username).exists():
                        return Response({'error': 'Username already exists'})
                    else:
                        if len(password)< 6:
                            return Response({'error': 'Password must be at least 6 characters'})
                        else: 
                            user = User.objects.create_user(username=username, password=password)
                            user.save()
                            user = User.objects.get(username=username)
                            user_profile = UserProfile(user=user.id, first_name='', last_name='', phone='', city='', address='')
                            user_profile.save()
                            return Response({'success': 'User created successfully'})
            else: 
                return Response({ 'error': 'Passwords do not match'}) 
        except:
            return Response({'error': 'Something went wrong during register'})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'succeess': 'CSRF cookie set'})

@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data= self.request.data
        isername = data['username']
        password = password['password']
        try:

            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
                return Response({'success': 'User authenticated', 'username': username})
            else:
                return Response({'error': 'error Authenticating'})
        except:
            return Response({'error': 'Something went wrong during Log In'})

    class Lougout(APIView):
        def post(self, request, format=None):
            try:
                auth.logout(request)
                return Response({'success': 'Loggout '})
            except:
                return Response({'error': 'Something went wrongduring logging out'})


    # def post(self, request, format='json'):
    #     serializer = UserSerializer(data=request.data)
    #     if serializer.is_valid():
    #         user = serializer.save()
    #         if user:
    #             token = Token.objects.create(user=user)
    #             json = serializer.data
    #             json['token'] = token.key
    #             return Response(json, status=status.HTTP_201_CREATED)
    #     retuen Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class ProductViews(APIView):
#     serializer_class = ProductSerializer
#     queryset = Product.object.all()

# Create your views here.
# from django.http import HttpResponse

# # Define the home view
# def home(request):
#   return HttpResponse('<h1>Hello shopping app</h1>')
