import { Injectable } from '@nestjs/common';
import { Client } from './interface';
import { CreateClientDto, UpdateClientDto } from './DTO';

@Injectable()
export class ClientRepository {
  private readonly clients: Client[] = [];

  createClient(createClientDto: CreateClientDto): Client {
    const newClient: Client = {
      id: Math.random().toString(),
      ...createClientDto,
    };
    
    this.clients.push(newClient);
    return newClient;
  }

  getClientById(clientId: string): Client {
    const client = this.clients.find(c => c.id === clientId);
    if (!client) {
      throw new Error('Client not found');
    }
    return client;
  }

  updateClient(clientId: string, updateClientDto: UpdateClientDto): Client {
    const client = this.getClientById(clientId);
    Object.assign(client, updateClientDto);
    return client;
  }

  deleteClient(clientId: string): void {
    const index = this.clients.findIndex(c => c.id === clientId);
    if (index === -1) {
      throw new Error('Client not found');
    }
    this.clients.splice(index, 1);
  }
}