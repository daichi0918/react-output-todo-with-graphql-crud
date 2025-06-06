import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => String, {
    nullable: true,
  })
  content: string | null;
}
