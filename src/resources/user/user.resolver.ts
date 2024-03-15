import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  User,
  CreateOneUserArgs,
  FindManyUserArgs,
} from '../../../prisma/generated/db-types/src';
// import { Prisma } from '@prisma/client';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args() userCreateArgs: CreateOneUserArgs): Promise<User> {
    return this.userService.create(userCreateArgs);
  }

  @Query(() => [User])
  users(@Args({ nullable: true }) params: FindManyUserArgs): Promise<User[]> {
    return this.userService.findAll(params);
  }
}
