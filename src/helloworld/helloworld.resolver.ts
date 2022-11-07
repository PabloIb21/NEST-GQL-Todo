import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, { description: 'Retorna Hola Mundo', name: 'hello' })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From zero to argument TO (default 7)',
  })
  getRandomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to = 7,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
