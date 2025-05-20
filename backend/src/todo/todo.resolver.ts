import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo as TodoModel } from './models/todo.model';
import { CreateTodoInput } from './dto/createTodo.input';
import { Todo } from 'generated/prisma';
import { UpdateTodoInput } from './dto/updateTodo.input';

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

  @Mutation(() => TodoModel)
  async updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return await this.todoService.updateTodo(updateTodoInput);
  }

  @Mutation(() => TodoModel)
  async deleteTodo(@Args('id', { type: () => Int }) id: number): Promise<Todo> {
    return await this.todoService.deleteTodo(id);
  }
}
