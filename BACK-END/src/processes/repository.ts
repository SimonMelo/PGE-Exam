import { Injectable } from '@nestjs/common';
import { Process } from './interface';
import { CreateProcessDto, UpdateProcessDto } from './DTO';

@Injectable()
export class ProcessRepository {
  private readonly processes: Process[] = [];

  createProcess(createProcessDto: CreateProcessDto): Process {
    const newProcess: Process = {
      id: Math.random().toString(),
      ...createProcessDto,
    };
    
    this.processes.push(newProcess);
    return newProcess;
  }

  getProcessById(processId: string): Process {
    const process = this.processes.find(p => p.id === processId);
    if (!process) {
      throw new Error('Process not found');
    }
    return process;
  }

  updateProcess(processId: string, updateProcessDto: UpdateProcessDto): Process {
    const process = this.getProcessById(processId);
    Object.assign(process, updateProcessDto);
    return process;
  }

  deleteProcess(processId: string): void {
    const index = this.processes.findIndex(p => p.id === processId);
    if (index === -1) {
      throw new Error('Process not found');
    }
    this.processes.splice(index, 1);
  }
}