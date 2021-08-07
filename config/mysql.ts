import {Sequelize} from "sequelize";

require("dotenv").config()


const {MySqlDBName, MySqlDB_password, MySqlDB_user_name, MySqlDB_host} = process.env;
export const MySqlDB = new Sequelize(
    String(MySqlDBName),
    String(MySqlDB_user_name),
    MySqlDB_password,
    {
        host: MySqlDB_host,
        dialect: "mysql",
    }
);
