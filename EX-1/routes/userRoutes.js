import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

import validateUser from '../middleware/validateUser.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

// 🔐 Validate body before hitting controller
router.post('/users', validateUser, createUser);
router.put('/users/:id', validateUser, updateUser);

router.delete('/users/:id', deleteUser);

export default router;
