import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() placeholder: string;
   // tslint:disable-next-line:no-output-rename
  @Output('addTodo') newTodoEmit = new EventEmitter<string>();

  constructor() { }

  newTodo;
  ngOnInit() {
  }

  addTodo() {
    this.newTodoEmit.emit(this.newTodo);
    this.newTodo = '';
  }
}
