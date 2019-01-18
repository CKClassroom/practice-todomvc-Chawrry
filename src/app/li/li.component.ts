import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-li',
  templateUrl: './li.component.html',
  styleUrls: ['./li.component.css']
})
export class LiComponent implements OnInit {
  @Input() filterSelected: string;
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
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
