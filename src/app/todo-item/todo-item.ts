import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../app';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent {

  task = input.required<Task>(); 
  
  outputToggleTask = output<void>();
  outputDeleteId = output<void>();

  onToggle() {
    this.outputToggleTask.emit();
  }

  onDelete() {
    this.outputDeleteId.emit();
  }
}