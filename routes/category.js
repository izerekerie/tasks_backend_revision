import express  from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category";
import {auth} from '../middleware/auth'
const router=express.Router();

router.get('/',getCategories);
router.get('/:id',getCategory);
router.post('/:id',auth,updateCategory);
router.post('/',auth,createCategory);
router.delete('/:id',auth,deleteCategory);

export default router