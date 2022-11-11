import { InputType } from '@nestjs/graphql';
import { MaxLength, IsOptional, Length } from 'class-validator';
import { Field } from '@nestjs/graphql';

@InputType()
export class NewReceipeInput {
  @Field()
  @MaxLength(20)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(20, 255)
  description?: string;

  @Field((type) => [String])
  ingredients: string[];
}
