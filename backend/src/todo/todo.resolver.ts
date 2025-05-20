import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo as TodoModel } from './models/todo.model';
import { CreateTodoInput } from './dto/createTodo.input';
import { Todo } from 'generated/prisma';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoModel], { nullable: 'items' })
  async getTodos(): Promise<Todo[]> {
    return await this.todoService.getTodos();
  }

  @Mutation(() => TodoModel)
  async createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.createTodo(createTodoInput);
  }
}
