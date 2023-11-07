import {  DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Celula  from "./Celula.js"; 

const Usuario = sequelize.define('usuarios', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  user: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

// Definir la relación con Celula
Usuario.belongsTo(Celula, {
  foreignKey: 'celulaId', // Nombre de la clave foránea en la tabla Usuario
  as: 'celula', // Alias para la relación con Celula
});


export default Usuario;