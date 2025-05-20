import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './models/todo.model';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { nullable: 'items' })
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  @Mutation(() => Todo)
  createTodo(
    @Args('title') title: string,
    @Args('content', { nullable: true }) content: string,
  ): Todo {
    return this.todoService.createTodo(title, content);
  }
}
