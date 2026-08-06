import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoFormComponent {

  newTaskTitle = signal('');
  add = output<string>();

  onAdd() {
    if (this.newTaskTitle().trim() !== '') {
      this.add.emit(this.newTaskTitle());
      this.newTaskTitle.set('');
    }
  }
}