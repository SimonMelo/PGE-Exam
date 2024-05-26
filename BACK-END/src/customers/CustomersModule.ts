import { Module } from '@nestjs/common';
import { ClientsController } from './controllers';
import { ClientsService } from './services';
import { ClientRepository } from './repository';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [
    ClientsService,
    ClientRepository,
  ],
})
export class CustomersModule {}
