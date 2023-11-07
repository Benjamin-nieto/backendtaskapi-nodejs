import { Router } from "express";
import {getCelulas, createCelula, deleteCelula, updateCelula, getCelulaById} from '../controller/celula.controller.js'

const router = Router();

router.get('/celulas',getCelulas);
router.post('/celulas',createCelula);
router.put('/celulas/:id',updateCelula);
router.delete('/celulas/:id',deleteCelula);
router.get('/celulas/:id',getCelulaById);

export default router;