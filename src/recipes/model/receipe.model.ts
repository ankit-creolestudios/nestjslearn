import { ID, Directive, ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: string;
  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;
  @Field()
  cratedAt: Date;

  @Field((type) => [String])
  ingredients: string[];
}
