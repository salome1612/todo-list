import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TodoList } from './todo-list/todo-list';
import { TodoFormComponent } from './todo-form/todo-form';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoList, TodoFormComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  tasks = signal<Task[]>([]);
  nextId: number = 1; 

  addTask(newTaskTitle: string) {
      this.tasks.set([...this.tasks(), { 
        id: this.nextId++, 
        title: newTaskTitle, 
        completed: false 
      }])
  }

  toggleTask(task: Task) {
    this.tasks().map((item) => {
      if (task.id === item.id){
        item.completed = !item.completed;
      }
    })
  }
  
  deleteTask(id: number) {
    this.tasks.set(this.tasks().filter(t => t.id !== id));
  }
}