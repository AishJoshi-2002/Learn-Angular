import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() tododo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();
  onClick(tododo: Todo) {
    this.todoDelete.emit(tododo);
    // console.log("Onclick has been triggered");
  }
  onCheckboxClick(tododo: Todo) {
    if (tododo.active) {
      tododo.active = false;
    } else {
      tododo.active = true;
    }
    this.todoUpdate.emit(tododo);
  }
}
