import { UserRole } from "./interface";

export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserRole;
  }
  
  export class UpdateUserDto {
    readonly username?: string;
    readonly email?: string;
    readonly password?: string;
  }