import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken"
import { JwtPayload } from "./interface/jwt-payload.interface"

@Injectable()
export class JwtService {
    private readonly JWT_SECRET_KEY = 'secret_key'

    signPayload(payload: JwtPayload): string {
        return jwt.sign(payload, this.JWT_SECRET_KEY)
    }

    verifyToken(token: string): JwtPayload {
        return jwt.verify(token, this.JWT_SECRET_KEY) as JwtPayload
    }
}