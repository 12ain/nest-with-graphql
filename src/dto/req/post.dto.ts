import { Field, InputType } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

InputType();
export class PostDto {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @Length(30, 255)
  body: string;
}
