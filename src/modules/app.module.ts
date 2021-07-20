import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PostsModule } from './posts.module';
import { createUsersLoader } from '../loaders/users.loader';
import { UsersModule } from './users.module';
import { UsersService } from '../services/users.service';

@Module({
  imports: [
    PostsModule,
    GraphQLModule.forRootAsync({
      imports: [UsersModule],
      useFactory: (usersService: UsersService) => ({
        autoSchemaFile: 'schema.gql',
        context: (): any => ({
          randomValue: Math.random(),
          usersLoader: createUsersLoader(usersService)
        })
      }),
      inject: [UsersService]
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
