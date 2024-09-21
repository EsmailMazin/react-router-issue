import express from 'express';         // Use ES6 `import`
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './backend/config/db.js';   // Use `import` for your db connection
import userRoutes from './backend/routes/userRoutes.js';  // Import your routes with ES6 syntax

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
