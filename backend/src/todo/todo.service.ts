import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    const todo1 = new Todo();
    todo1.id = 1;
    todo1.title = 'todo1';
    this.todos.push(todo1);
    return this.todos;
  }
}
