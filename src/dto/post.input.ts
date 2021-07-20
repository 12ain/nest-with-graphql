import { Field, InputType } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class NewPostInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @Length(10, 255)
  body: string;
}
