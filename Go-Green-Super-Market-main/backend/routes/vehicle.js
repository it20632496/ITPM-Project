import express, { Router } from 'express';

import { addVehicle, viewVehicles, getVehicle, editVehicle, deleteVehicle, getVehicleByNumber } from '../controllers/vehicle.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/',  catchAsync(addVehicle));
router.get('/',  catchAsync(viewVehicles));
router.get('/:id',  catchAsync(getVehicle));
router.get('/getVehicleByNumber/:num',  catchAsync(getVehicleByNumber));
router.patch('/:id',  catchAsync(editVehicle));
router.delete('/:id',  catchAsync(deleteVehicle));

export default router;