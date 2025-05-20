import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  content?: string;
}
