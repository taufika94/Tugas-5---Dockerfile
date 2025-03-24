import { Sequelize } from "sequelize";

const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
    host: "34.71.170.158",
    dialect: "mysql",
});

export default db;