import { DataTypes } from "sequelize";
import  sequelize  from "../database/database.js";
import Tarea  from "./Tarea.js"; // Asegúrate de que la ubicación del archivo sea correcta

const SubTarea = sequelize.define('sub_tareas', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  horas: {
    type: DataTypes.BIGINT,
  },
  estado: {
    type: DataTypes.STRING,
  },
  porcentaje: {
    type: DataTypes.INTEGER,
  },
});

// Definir la relación con Tarea
SubTarea.belongsTo(Tarea, {
  foreignKey: 'tareaId', // Nombre de la clave foránea en la tabla SubTarea
  as: 'tarea', // Alias para la relación con Tarea
});

export default SubTarea;