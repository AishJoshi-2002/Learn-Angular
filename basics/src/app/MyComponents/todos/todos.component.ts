import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string|null
  todos: Todo[]
  constructor () {
    // this.todos = [
    //   {
    //     sno: 1,
    //     title: "This is title1",
    //     desc: "Description1",
    //     active: true
    //   },
    //   {
    //     sno: 2,
    //     title: "This is title2",
    //     desc: "Description2",
    //     active: true
    //   },
    //   {
    //     sno: 3,
    //     title: "This is title3",
    //     desc: "Description3",
    //     active: true
    //   }
    // ]
    this.localItem = localStorage.getItem("todos")
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    // console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  updateTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index] = todo;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
