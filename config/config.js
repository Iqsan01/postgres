import { Sequelize } from "sequelize";

const db = new Sequelize('login_jwt','postgres','admin', {
    host: 'localhost',
    dialect: 'postgres',
});

export default db;