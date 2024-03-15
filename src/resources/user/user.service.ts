import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findOne(findUserArgs: Prisma.UserFindUniqueArgs) {
    return this.prisma.user.findUnique(findUserArgs);
  }

  findAll(params?: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(params);
  }

  create(userCreateArgs: Prisma.UserCreateArgs) {
    return this.prisma.user.create(userCreateArgs);
  }

  update(userUpdateInput: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(userUpdateInput);
  }

  remove(removeUserArgs: Prisma.UserDeleteArgs) {
    return this.prisma.user.delete(removeUserArgs);
  }
}
