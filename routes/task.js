import express from "express";

import {getTasks,getTask,getTaskSearch,deleteTask,updateTask, createTask} from '../controllers/task'
const router=express.Router();
import {auth} from '../middleware/auth'
router.get('/',getTasks);
router.get('/:id',getTask);
router.post('/',createTask);
router.put('/:id',auth,updateTask);
router.delete('/:id',auth,deleteTask);

export default router