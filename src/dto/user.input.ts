import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class UserDto {
  @Field()
  @Length(5, 20)
  name: string;
}
