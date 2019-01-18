import { Component } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
  isEdit: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoMVC';
  placeholder = 'What needs to be done?';
  filterSelected = 'all';

  todos: Todo[] = [];
  maxid = 0;

  checkAll() {
    this.todos.forEach( x => x.isComplete = !x.isComplete );
  }

  addTodo(newTodo: string) {
    this.todos.push({
      id: ++this.maxid,
      name: newTodo,
      isComplete: false,
      isEdit: false
    });
  }

  get todoLeft() {
    return this.todos.filter(x => !x.isComplete ).length;
  }

  clearComplete() {
    this.todos = this.todos.filter( x => !x.isComplete );
  }
}
