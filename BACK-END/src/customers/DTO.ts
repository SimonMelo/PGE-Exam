export class CreateClientDto {
    readonly nome: string;
    readonly cpf: string;
}

export class UpdateClientDto {
    readonly nome?: string;
    readonly cpf?: string;
}