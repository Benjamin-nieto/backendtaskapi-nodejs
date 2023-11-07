import { Sequelize } from "sequelize";
const sequelize = new Sequelize('task', 'root', '1234567890', {
  host: '127.0.0.1',
  port: 8000,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default sequelize;