import { NextFunction, Request, Response } from 'express';
import Token from '../auth/helpers/jwt';

export const verifiToken = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.get('Authorization') || '';

  try {
    const decode = await Token.compareToken(token);
    req.user = decode;
    next();
  } catch (error) {
    return res.json({ message: 'Error on Token', error });
  }
};
