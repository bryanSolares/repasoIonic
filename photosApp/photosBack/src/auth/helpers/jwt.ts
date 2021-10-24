import jwt from 'jsonwebtoken';

export default class Token {
  private static seed = 'este-es-el-seed-ultrasecreto';
  private static expires = '12h';

  constructor() {}

  static generateToken(payload: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    role?: string;
  }): string {
    return jwt.sign(payload, this.seed, {
      expiresIn: this.expires,
    });
  }

  static compareToken(token: string) {
    return new Promise((res, rej) => {
      const payload = jwt.verify(token, this.seed);

      if (payload) {
        res(payload);
      }

      rej(null);
    });
  }
}
