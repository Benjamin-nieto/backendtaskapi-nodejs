import { Router } from "express";
import { createTarea, deleteTarea, getTareaById, getTareas, updateTarea } from '../controller/tarea.controller.js'

const router = Router();

router.get('/tareas',getTareas);
router.post('/tarea',createTarea);
router.put('/tarea/:id',updateTarea);
router.delete('/tarea/:id',deleteTarea);
router.get('/tarea/:id',getTareaById);

export default router;