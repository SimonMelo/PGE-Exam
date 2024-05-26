export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
  }
  
  export enum UserRole {
    ADMIN = 'admin',
    LAWYER = 'lawyer',
    CLIENT = 'client',
  }
  