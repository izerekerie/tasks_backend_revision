import express  from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category.js";
import {auth} from '../middleware/auth'
const router=express.Router();

router.get('/',getCategories);
router.get('/:id',getCategory);
router.put('/:id',auth,updateCategory);
router.post('/',auth,createCategory);
router.delete('/:id',auth,deleteCategory);

export default router