import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectDb } from './api/config.js';
import authRoutes from './api/routes/route.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

connectDb();

// Routes
app.use('/api', authRoutes);

// Start the Server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
