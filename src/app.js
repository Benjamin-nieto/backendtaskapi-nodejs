import express from "express";
import celulaRoutes from './routes/celula.routes.js';
import personaRoutes from './routes/persona.routes.js';
import tareaRoutes from './routes/tarea.routes.js';
import subTareaRoutes from './routes/subtarea.routes.js';
import rol from './routes/rol.routes.js';
import usuario from './routes/usuario.routes.js';


const app = express();

// middlewares
app.use(express.json());


// routes
app.use(celulaRoutes);
app.use(personaRoutes);
app.use(tareaRoutes);
app.use(subTareaRoutes);
app.use(rol);
app.use(usuario);

export default app;