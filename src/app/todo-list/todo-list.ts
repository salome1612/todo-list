import { Component, input, output } from '@angular/core';
import { Task } from '../app';
import { TodoItemComponent } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  tasks = input<Task[]>([]);
  outputDeleteId = output<number>();
  outputToggleTask = output<Task>();

  deleteTask(taskId: number){
    this.outputDeleteId.emit(taskId);
  }

  toggleTask(task: Task){
    this.outputToggleTask.emit(task);
  }

   getActiveCount() {
    return this.tasks().filter(t => !t.completed).length;
  }

  getCompletedCount() {
    return this.tasks().filter(t => t.completed).length;
  }
}
