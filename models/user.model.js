import { Sequelize } from "sequelize";
import db from "../config/config.js";

const User = db.define('users', {
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    },
});

export default User;