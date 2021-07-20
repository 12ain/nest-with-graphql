import * as DataLoader from 'dataloader';

import { mapFromArray } from '../utils';
import { User } from '../models';
import { UsersService } from '../services/users.service';

export const createUsersLoader = (usersService: UsersService): DataLoader<number, User> =>
  new DataLoader<number, User>(async (ids: number[]) => {
    const users = await usersService.getUsersByIds(ids);

    const usersMap = mapFromArray(users, (user: User) => user.id);

    return ids.map((id) => usersMap[id]);
  });
