import { Injectable } from '@nestjs/common';
import { User } from './interface';

@Injectable()
export class UserRepository {
  private readonly users: User[] = []

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  findOne(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: string, updateUserDto: Partial<User>): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    } else {
      return undefined;
    }
  }

  deleteUser(id: string): void {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }
}