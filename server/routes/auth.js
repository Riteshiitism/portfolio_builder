import bcryptjs from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import Signup from '../models/signup.js';
import { promisify } from 'util';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES || '2h';
const NODE_ENV = process.env.NODE_ENV;

const signJwt = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRES });

router.post('/signup', async (req, res) => {
  try {
    const { firstname, lastname, email, number, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newSignup = await Signup.create({ firstname, lastname, email, number, password: hashedPassword });

    const token = signJwt(newSignup._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'none',
    }).send(newSignup);
  } catch (err) {
    res.status(401).json(err.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ errorMessage: 'Please enter all required fields.' });

    const existingUser = await Signup.findOne({ email });
    if (!existingUser) return res.status(401).json({ errorMessage: 'User not exist' });

    const passwordCorrect = await bcryptjs.compare(password, existingUser.password);
    if (!passwordCorrect) return res.status(401).json({ errorMessage: 'Wrong email or password.' });

    const token = signJwt(existingUser._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      sameSite: 'none',
    }).send(existingUser);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post('/signout', (req, res) => {
  res.clearCookie('token').status(200).send({ message: 'Signed out successfully.' });
});

export default router;
