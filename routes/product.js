import express, { Router } from 'express';

import { addProduct, getAllProducts, getNumOfProducts, getProductsOfAType, deleteProduct, editProduct } from '../controllers/product.js';
import {catchAsync} from '../utils/catchAsync.js';

import multer from 'multer';
import { storage } from '../cloudinary/index.js';
const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single("image"), catchAsync(addProduct));
router.get('/', catchAsync(getAllProducts));
router.get('/getProductsOfAType/:type', catchAsync(getProductsOfAType));
router.delete('/:id', catchAsync(deleteProduct));
router.get('/getNumOf', catchAsync(getNumOfProducts));
router.patch('/:id',  catchAsync(editProduct));

export default router;