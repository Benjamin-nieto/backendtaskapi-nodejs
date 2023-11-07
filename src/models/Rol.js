import { DataTypes } from "sequelize";
import  sequelize  from "../database/database.js";

const Rol = sequelize.define('roles', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreRol: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  });


export default Rol;