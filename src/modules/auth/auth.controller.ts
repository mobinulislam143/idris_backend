
import { Request, Response } from 'express';
import * as AuthService from './auth.services'

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await AuthService.registerUser(name, email, password);
    res.status(201).json({ message: 'User registered', user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.loginUser(email, password);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
