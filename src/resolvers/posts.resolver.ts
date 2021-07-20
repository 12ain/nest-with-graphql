import { NotFoundException } from '@nestjs/common';
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as DataLoader from 'dataloader';
import { PostDto } from '../dto/req/post.dto';

import { User, Post } from '../models';

import { PostsService } from '../services/posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: 'posts' })
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id') id: string): Promise<Post> {
    const result = await this.postsService.findOneById(id);
    if (!result) {
      throw new NotFoundException(id);
    }
    return result;
  }

  // @Mutation(() => Post)
  // createPost(@Args('newPostData') newPostData: PostDto): Promise<Post> {
  //   return this.postsService.create(newPostData);
  // }

  @Mutation(() => Boolean)
  removePost(@Args('id') id: string): Promise<boolean> {
    return this.postsService.remove(id);
  }

  @ResolveField('createdBy', () => User)
  getCreatedBy(@Parent() post: Post, @Context('usersLoader') usersLoader: DataLoader<number, User>): Promise<User> {
    const { userId } = post;
    return usersLoader.load(userId);
  }
}
