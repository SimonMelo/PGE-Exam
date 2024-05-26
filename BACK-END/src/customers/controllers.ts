import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ClientsService } from './services';
import { CreateClientDto, UpdateClientDto } from './DTO';
import { Client } from './interface';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async createClient(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.createClient(createClientDto);
  }

  @Get(':id')
  async getClientById(@Param('id') clientId: string): Promise<Client> {
    return this.clientsService.getClientById(clientId);
  }

  @Put(':id')
  async updateClient(@Param('id') clientId: string, @Body() updateClientDto: UpdateClientDto): Promise<Client> {
    return this.clientsService.updateClient(clientId, updateClientDto);
  }

  @Delete(':id')
  async deleteClient(@Param('id') clientId: string): Promise<void> {
    return this.clientsService.deleteClient(clientId);
  }
}