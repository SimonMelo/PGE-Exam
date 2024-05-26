import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ProcessesService } from './services';
import { CreateProcessDto, UpdateProcessDto } from './dto';
import { Process } from './interface';

@Controller('processes')
export class ProcessesController {
  constructor(private readonly processesService: ProcessesService) {}

  @Post()
  async createProcess(@Body() createProcessDto: CreateProcessDto): Promise<Process> {
    return this.processesService.createProcess(createProcessDto);
  }

  @Get(':id')
  async getProcessById(@Param('id') processId: string): Promise<Process> {
    return this.processesService.getProcessById(processId);
  }

  @Put(':id')
  async updateProcess(@Param('id') processId: string, @Body() updateProcessDto: UpdateProcessDto): Promise<Process> {
    return this.processesService.updateProcess(processId, updateProcessDto);
  }

  @Delete(':id')
  async deleteProcess(@Param('id') processId: string): Promise<void> {
    return this.processesService.deleteProcess(processId);
  }
}