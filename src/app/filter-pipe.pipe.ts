import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app.component';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: Todo[], condition?: 'all' | 'active' | 'completed'): any {

    console.log(condition);
    if (condition === 'all') {
      console.log(todos);
      return todos;
    }

    if (condition === 'active') {
      return todos.filter(todo => !todo.isComplete);
    }

    if (condition === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }

    return [];
  }

}
