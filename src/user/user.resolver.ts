import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Param } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userervice: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserDto) {
    return this.userervice.create(createUserInput);
  }

  @Query(() => [User], { name: 'Users' })
  findAll() {
    return this.userervice.findAll();
  }

  @Query(() => User, { name: 'FindOne' })
  findOne(@Args('id', { type: () => String }) id: string,@GetUser() user: User) {
    return this.userervice.findOne("id",id,user);
  }
 

  
}