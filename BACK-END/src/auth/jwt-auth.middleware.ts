import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from './jwt-service';

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) {}

    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization

        if (authHeader && authHeader.startsWith("Bearer ")) {
            const token = authHeader.split(" ")[1]
            try {
                const decodedToken = this.jwtService.verifyToken(token)
                req["user"] = decodedToken
            } catch (error) {
                return res.status(401).json({ message: "Token inválido" })
            }
        } else {
            return res.status(401).json({ message: "Token de autenticação não fornecido" })
        }

        next()
    }
}