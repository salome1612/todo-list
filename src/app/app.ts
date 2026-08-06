import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  tasks: Task[] = []; 
  newTaskTitle: string = ''; 
  nextId: number = 1; 

  
  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      this.tasks.push({ 
        id: this.nextId++, 
        title: this.newTaskTitle, 
        completed: false 
      });
      this.newTaskTitle = ''; 
    }
  }


  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

 
  getActiveCount() {
    return this.tasks.filter(t => !t.completed).length;
  }

  getCompletedCount() {
    return this.tasks.filter(t => t.completed).length;
  }
}