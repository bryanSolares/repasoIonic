import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../model/user';
import Token from '../../auth/helpers/jwt';

const newUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  };

  try {
    const userCreated = await User.create(user);
    const payloadParams = {
      _id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      avatar: userCreated.avatar,
    };
    const token = Token.generateToken(payloadParams);
    res.json({ message: 'User created', user: userCreated, token, ok: true });
  } catch (error) {
    return res.json({ message: 'Error on create user', error, ok: false });
  }
};

const updateUser = (req: any, res: Response) => {
  console.log(req.user);
  const { _id } = req.user;
  const { name, email } = req.body;

  try {
    User.findByIdAndUpdate(
      _id,
      { name, email },
      { new: true },
      (error, newUser) => {
        if (error) {
          return res.json({
            message: 'Error on update user',
            error,
            ok: false,
          });
        }

        if (!newUser) {
          return res.json({
            message: 'User not found on database',
            error,
            ok: false,
          });
        }

        const payloadParams = {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          avatar: newUser.avatar,
        };
        const token = Token.generateToken(payloadParams);

        res.json({ message: 'User Updated', token, ok: true });
      }
    );
  } catch (error) {
    return res.json({ message: 'Error on update user', error, ok: false });
  }
};

const deleteUser = (req: Request, res: Response) => {};

const allUsers = (req: Request, res: Response) => {
  res.json('hola');
};

export const Controller = { newUser, updateUser, deleteUser, allUsers };
