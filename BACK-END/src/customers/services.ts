import { Injectable } from '@nestjs/common';
import { ClientRepository } from './repository';
import { CreateClientDto, UpdateClientDto } from './DTO';
import { Client } from './interface';

@Injectable()
export class ClientsService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientRepository.createClient(createClientDto);
  }

  async getClientById(clientId: string): Promise<Client> {
    return this.clientRepository.getClientById(clientId);
  }

  async updateClient(clientId: string, updateClientDto: UpdateClientDto): Promise<Client> {
    return this.clientRepository.updateClient(clientId, updateClientDto);
  }

  async deleteClient(clientId: string): Promise<void> {
    return this.clientRepository.deleteClient(clientId);
  }
}