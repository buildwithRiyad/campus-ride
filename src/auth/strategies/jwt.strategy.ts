import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // আপনার .env এর JWT_SECRET ব্যবহার করুন
    });
  }

  validate(payload: { id: number; email: string }) {
    // payload থেকে যা যা চান, সেগুলো req.user এ বসবে
    return { id: payload.id, email: payload.email };
  }
}
