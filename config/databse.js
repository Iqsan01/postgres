import db from "./config.js";

const connect = async () => {
    await db.sync()
        .then(() => {
            console.log('Database connection established successfully.');
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
};

export default connect;