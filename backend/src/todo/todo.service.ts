import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(title: string, content?: string): Todo {
    const newTodo = new Todo();
    newTodo.id = this.todos.length + 1;
    newTodo.title = title;
    newTodo.content = content;

    this.todos.push(newTodo);
    return newTodo;
  }
}
