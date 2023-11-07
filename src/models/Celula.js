import {  DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Celula = sequelize.define(
    "celulas",{
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false            
        },
        productOwner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        proyecto: {
            type: DataTypes.STRING,
            allowNull: false
        }

});

export default Celula;