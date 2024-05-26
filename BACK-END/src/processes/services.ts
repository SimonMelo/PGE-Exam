import { Injectable } from '@nestjs/common';
import { ProcessRepository } from './repository';
import { CreateProcessDto, UpdateProcessDto } from './dto';
import { Process } from './interface';

@Injectable()
export class ProcessesService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async createProcess(createProcessDto: CreateProcessDto): Promise<Process> {
    return this.processRepository.createProcess(createProcessDto);
  }

  async getProcessById(processId: string): Promise<Process> {
    return this.processRepository.getProcessById(processId);
  }

  async updateProcess(processId: string, updateProcessDto: UpdateProcessDto): Promise<Process> {
    return this.processRepository.updateProcess(processId, updateProcessDto);
  }

  async deleteProcess(processId: string): Promise<void> {
    return this.processRepository.deleteProcess(processId);
  }
}
