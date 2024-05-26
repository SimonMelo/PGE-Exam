import { Module } from '@nestjs/common';
import { UsersController } from './controllers';
import { UsersService } from './services';
import { UserRepository } from './repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,
  ],
})
export class UsersModule {}
