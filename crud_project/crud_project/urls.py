"""
URL configuration for crud_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from tasks_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tasks/', views.getTasks, name='getTasks'),            # GET ALL
    path('tasks/search/<str:title>/', views.getTask, name='getTask'),  # GET ONE by title
    path('tasks/create/', views.createTask), # POST
    path('tasks/delete/<str:title>/', views.deleteTask, name='deleteTask'), # DELETE by title
    path('tasks/update/<str:title>/', views.updateTask, name='updateTask'), # PUT by title
]
