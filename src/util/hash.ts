import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import 'dotenv/config.js';

@Injectable()
export default class HashService {
  private salt: number;

  constructor() {
    this.salt = parseInt(process.env.CRYPT_SALT);
  }

  public async hashPass(pass: string): Promise<string> {
    return await hash(pass, this.salt).then((r) => r);
  }

  public async verifyPass(pass: string, hash: string): Promise<boolean> {
    return await compare(pass, hash).then((r) => r);
  }
}
