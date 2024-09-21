import express from 'express';
import { registerUser, authUser } from '../controllers/userController.js';  // ES6 syntax

const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);

export default router;  // Use ES6 `export default`
