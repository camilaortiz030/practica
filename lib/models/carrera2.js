import { Model, DataTypes } from 'sequelize';


export default class Carrera2 extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'carrera2',
      }
    );
  }
}
