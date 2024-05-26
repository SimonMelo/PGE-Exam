import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './repository';
import { UpdateUserDto } from './DTO';
import { User } from './interface';
import { CreateUserDto } from './DTO';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser: User = {
      id: Math.random().toString(),
      ...createUserDto,
    };

    
    this.users.push(newUser);
    return newUser;
  }

  async getUserById(userId: string): Promise<User> {
    const user = this.users.find(u => u.id === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.getUserById(userId);
    Object.assign(user, updateUserDto);
    return user;
  }

  async deleteUser(userId: string): Promise<void> {
    const index = this.users.findIndex(u => u.id === userId);
    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(index, 1);
  }
}