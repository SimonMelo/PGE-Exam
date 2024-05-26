import { Module } from '@nestjs/common';
import { ProcessesController } from './controllers';
import { ProcessesService } from './services';
import { ProcessRepository } from './repository';

@Module({
  imports: [],
  controllers: [ProcessesController],
  providers: [
    ProcessesService,
    ProcessRepository,
  ],
})
export class ProcessesModule {}
