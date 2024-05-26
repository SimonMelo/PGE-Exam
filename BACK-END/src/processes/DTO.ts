export class CreateProcessDto {
    readonly numeroProcesso: string;
    readonly parte: string;
    readonly responsavelId: string;
    readonly tema: string;
    readonly valorCausa: number;
}

export class UpdateProcessDto {
    readonly numeroProcesso?: string;
    readonly parte?: string;
    readonly responsavelId?: string;
    readonly tema?: string;
    readonly valorCausa?: number;
}