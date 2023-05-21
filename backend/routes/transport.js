import express, { Router } from 'express';

import { addTransport, getAllTransports, getNumOfTransports,  deleteTransport, editTransport } from '../controllers/transport.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/',  catchAsync(addTransport));
router.get('/', catchAsync(getAllTransports));
router.delete('/:id', catchAsync(deleteTransport));
router.get('/getNumOf', catchAsync(getNumOfTransports));
router.patch('/:id',  catchAsync(editTransport));

export default router;