import { Router } from "express";
import {createRol, deleteRol, getRolById, getRoles, updateRol} from "../controller/rol.controller.js"
const router = Router();

router.get('/roles',getRoles);
router.post('/rol',createRol);
router.put('/rol/:id',updateRol);
router.delete('/rol/:id',deleteRol);
router.get('/rol/:id',getRolById);

export default router;