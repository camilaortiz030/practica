import { Model, DataTypes } from 'sequelize';

export default class Curso extends Model {
  static init(sequelize) {
    return super.init(
      {
        Horario: DataTypes.STRING,
        IdProfesor: DataTypes.INTEGER,
        IdMateria: DataTypes.INTEGER
      }, {
      sequelize,
      modelName: 'Curso',
    }
    );
  }

}