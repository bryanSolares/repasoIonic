import { Request, Response } from 'express';
import { User } from '../../user/model/user';
import Token from '../helpers/jwt';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: 'User not Found', ok: false });
    }

    if (!user.comparePassword(password)) {
      return res.json({ message: 'Password or User invalid', ok: false });
    }

    const payloadParams = {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    const token = Token.generateToken(payloadParams);

    res.json({ message: 'Welcome', token, ok: true });
  } catch (error) {
    return res.json({ message: 'Error on login', error, ok: false });
  }
};

const logout = (req: Request, res: Response) => {};

export const Controller = { login, logout };
