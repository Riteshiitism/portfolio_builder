import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './database/db.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import authRoutes from './routes/auth.js'; 

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.use('/api/portfolios', portfolioRoutes);
app.use('/auth', authRoutes.default); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
