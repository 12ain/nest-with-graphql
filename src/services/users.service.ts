import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.input';

import { delay } from '../utils';
import { User } from '../models';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Anna' }
  ];

  async getUsers(): Promise<User[]> {
    console.log('Getting users...');
    await delay(500);
    return this.users;
  }

  async getUser(id: number): Promise<User> {
    console.log(`Getting user with id ${id}...`);
    await delay(500);
    return this.users.find((user) => user.id === id);
  }

  async createUser(userData: UserDto): Promise<User> {
    await delay(500);
    return { id: 999, ...userData } as User;
  }

  async getUsersByIds(ids: readonly number[]): Promise<User[]> {
    console.log(`Getting users with ids (${ids.join(',')})`);
    await delay(500);
    return this.users.filter((u) => ids.includes(u.id));
  }
}
