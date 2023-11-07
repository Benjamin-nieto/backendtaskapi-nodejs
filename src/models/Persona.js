import {  DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Rol from './Rol.js';

const Persona = sequelize.define("personas",{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroIdentificacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nickName: {
        type: DataTypes.STRING,
        
    },
    //idRol

});

Persona.belongsTo(Rol, {
  foreignKey: "idRol", // Nombre de la clave foránea en la tabla Persona
  as: "rol", // Alias para la relación con Rol
});

export default Persona;