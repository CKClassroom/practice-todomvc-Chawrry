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
  @Output() todoEdit = new EventEmitter<Todo[]>();
  @Output() todoDestroy = new EventEmitter<Todo[]>();
  @Output() todoTarget = new EventEmitter<Todo[]>();
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
    this.todoTarget.emit(this.todos);
  }

  blurEdit(todo: Todo) {
    console.log(todo.name);
    todo.isEdit = false;
    this.todoEdit.emit(this.todos);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter( _todo => _todo.id != todo.id);
    this.todoDestroy.emit(this.todos);
  }

}
