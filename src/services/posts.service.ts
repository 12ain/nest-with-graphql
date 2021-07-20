import { Injectable } from '@nestjs/common';
import { PostDto } from '../dto/req/post.dto';
import { delay } from '../utils/index';

import { Post } from '../models';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: 'post-1', title: 'Post 1', body: 'Lorem 1', userId: 1 },
    { id: 'post-2', title: 'Post 2', body: 'Lorem 2', userId: 1 },
    { id: 'post-3', title: 'Post 3', body: 'Lorem 3', userId: 2 },
    { id: 'post-4', title: 'Post 4', body: 'Lorem 4', userId: 3 }
  ];

  async create(data: PostDto): Promise<Post> {
    await delay(300);
    return {
      id: 'test',
      userId: 1,
      ...data
    } as Post;
  }

  async remove(id: string): Promise<boolean> {
    await delay(200);
    if (!id) {
      return true;
    }
    return false;
  }

  async findOneById(id: string): Promise<Post> {
    await delay(200);
    return this.posts.find((post) => post.id === id);
  }

  async findAll(): Promise<Post[]> {
    console.log('Getting posts...');
    await delay(200);
    return this.posts;
  }
}
