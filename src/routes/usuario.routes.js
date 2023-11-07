import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuarioById, getUsuarios, updateUsuario } from '../controller/usuario.controller.js'

const router = Router();

router.get('/usuarios',getUsuarios);
router.post('/usuario',createUsuario);
router.put('/usuario/:id',updateUsuario);
router.delete('/usuario/:id',deleteUsuario);
router.get('/usuario/:id',getUsuarioById);

export default router;