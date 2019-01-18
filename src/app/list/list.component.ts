import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() filterSelected: string;
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

  checkAll() {
    this.todos.forEach( x => x.isComplete = !x.isComplete );
  }

  targetToggle(todo: Todo) {
    // todo.isComplete = !todo.isComplete;
    this.todos = this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isComplete = !_todo.isComplete;
      }
      return _todo;
    });
  }

  dbClick(todo: Todo) {
    if (todo.isComplete) {
      todo.isEdit = false;
    } else {
      todo.isEdit = true;
    }
  }

  blurEdit(todo: Todo) {
    console.log(todo.name);
    todo.isEdit = false;
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter( _todo =>  _todo.id !== todo.id);
  }

}
