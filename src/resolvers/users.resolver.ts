import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from '../dto/req/user.dto';

import { User } from '../models';
import { UsersService } from '../services/users.service';

@Resolver(User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  // @Mutation(() => User)
  // createUser(@Args('userData') userData: UserDto): Promise<User> {
  //   return this.usersService.createUser(userData);
  // }
}
