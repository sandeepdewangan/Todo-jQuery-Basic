from django.shortcuts import render, redirect
from django.views.generic import View
from django.http import JsonResponse
from django.forms.models import model_to_dict

from .forms import TaskForm
from .models import Task


class TaskList(View):
    def get(self, request):
        form = TaskForm()
        all_task = Task.objects.all()
        return render(request, 'task/task_list.html', {'form': form, 'all_task' : all_task})
    
    def post(self, request):
        form = TaskForm(request.POST)

        if form.is_valid():
            new_task = form.save()
            return JsonResponse({'task': model_to_dict(new_task)}, status=200)
        else:
            return redirect('task_list')

