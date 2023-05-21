import express, { Router } from 'express';

import { addOrder, getAllOrders, getNumOfOrders,  deleteOrder, editOrder } from '../controllers/order.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/',  catchAsync(addOrder));
router.get('/', catchAsync(getAllOrders));
router.delete('/:id', catchAsync(deleteOrder));
router.get('/getNumOf', catchAsync(getNumOfOrders));
router.patch('/:id',  catchAsync(editOrder));

export default router;