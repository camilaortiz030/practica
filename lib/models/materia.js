import { Model, DataTypes } from 'sequelize';
export default class Materia extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        IdMateria: DataTypes.INTEGER
      },
      {

        sequelize,
        modelName: 'Materia',
      }
    );
  }

}