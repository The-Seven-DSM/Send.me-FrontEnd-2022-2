import { Sequelize } from "sequelize";

const db = new Sequelize('API_a', 'root', 'admin',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;