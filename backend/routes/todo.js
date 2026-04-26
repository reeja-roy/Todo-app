import { Router } from 'express';
import { createTodo, getList, removeItem } from '../controllers/todo.controller.js';

const router = Router();

router.post('/add', createTodo);
router.get('/',getList)
router.delete('/:id',removeItem)

export default router;