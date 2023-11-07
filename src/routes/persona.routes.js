import { Router } from "express";
import {createPersona, deletePersona, getPersonaById, getPersonas, updatePersona} from '../controller/persona.controller.js'

const router = Router();

router.get('/personas',getPersonas);
router.post('/personas',createPersona);
router.put('/personas/:id',updatePersona);
router.delete('/personas/:id',deletePersona);
router.get('/personas/:id',getPersonaById);

export default router;