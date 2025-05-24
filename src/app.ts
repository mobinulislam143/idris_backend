import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import authRoutes from './modules/auth/auth.route';

dotenv.config(); // Load .env variables

const app = express();

// Middlewares
app.use(helmet()); // Secure HTTP headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Log requests to console
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);

export default app;
