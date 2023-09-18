from .serializers import TaskSerializer
from .models import Task
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# GET ALL
@api_view(['GET'])
def getTasks(request):
    tasks = Task.objects.all()                      # Get all tasks from database
    serializer = TaskSerializer(tasks, many=True)   # Convert to JSON (serialize)
    return Response(serializer.data, status=status.HTTP_200_OK) # Return JSON to client

# GET ONE by title
@api_view(['GET'])
def getTask(request, title):
    try:
        task = Task.objects.get(title=title)
        serializer = TaskSerializer(task, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

# POST
@api_view(['POST'])
def createTask(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

# DELETE by title
@api_view(['DELETE'])
def deleteTask(request, title):
    try:
        task = Task.objects.get(title=title)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)