import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class AggregationsType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  completed: number;

  @Field(() => Int, { deprecationReason: 'Most use total instead' })
  totalTodos: number;
}
