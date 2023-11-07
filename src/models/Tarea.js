import { DataTypes } from "sequelize";
import  sequelize from "../database/database.js";
import Persona from "./Persona.js"; // Asegúrate de que la ubicación del archivo sea correcta
import Celula from "./Celula.js"; // Asegúrate de que la ubicación del archivo sea correcta

const Tarea = sequelize.define('tareas', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  sprint: {
    type: DataTypes.BIGINT,
  },
  porcentaje: {
    type: DataTypes.DOUBLE,
  },
  estado: {
    type: DataTypes.ENUM,
    values: ['INICIADA', 'EN_PROGRESO', 'COMPLETADA'], // Ajusta los valores según tus necesidades
  },
});


Tarea.belongsTo(Persona, {
  foreignKey: 'personaId', // Nombre de la clave foránea en la tabla Tarea
  as: 'persona', // Alias para la relación con Persona
});

Tarea.belongsTo(Celula, {
  foreignKey: 'celulaId', // Nombre de la clave foránea en la tabla Tarea
  as: 'celula', // Alias para la relación con Celula
});


export default Tarea;