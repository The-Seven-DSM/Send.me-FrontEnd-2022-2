import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";

interface AssociateColumns{
    id:string;
    name:string;
    email:string;
    sex:string;
};

export class Associate extends Model{};

Associate.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },

        name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        email:{
            type: DataTypes.STRING,
            allowNull: false
        },

        sex: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'Associates',
        tableName: 'Associates'
    }
);