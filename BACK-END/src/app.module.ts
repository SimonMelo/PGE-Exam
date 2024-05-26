import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/CustomersModule';
import { ProcessesModule } from './processes/ProcessesModule';
import { UsersModule } from './users/UsersModule';

@Module({
  imports: [CustomersModule, ProcessesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
