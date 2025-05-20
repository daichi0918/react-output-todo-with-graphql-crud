import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { CreateTodoInput } from './dto/createTodo.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTodoInput } from './dto/updateTodo.input';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTodos(): Promise<Todo[]> {
    return await this.prismaService.todo.findMany();
  }

  async createTodo(createTodoInput: CreateTodoInput): Promise<Todo> {
    const { title, content } = createTodoInput;
    return await this.prismaService.todo.create({
      data: {
        title,
        content,
      },
    });
  }

  async updateTodo(updateTaskInput: UpdateTodoInput): Promise<Todo> {
    const { id, title, content } = updateTaskInput;
    return await this.prismaService.todo.update({
      data: { title, content },
      where: { id },
    });
  }

  async deleteTodo(id: number): Promise<Todo> {
    return await this.prismaService.todo.delete({
      where: { id },
    });
  }
}
