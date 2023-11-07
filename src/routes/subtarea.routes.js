import { Router } from "express";
import { createSubtarea, deleteSubtarea, getSubtareaById, getSubtareas, updateSubtarea } from '../controller/subtarea.controller.js'

const router = Router();

router.get('/subtareas',getSubtareas);
router.post('/subtarea',createSubtarea);
router.put('/subtarea/:id',updateSubtarea);
router.delete('/subtarea/:id',deleteSubtarea);
router.get('/subtarea/:id',getSubtareaById);

export default router;