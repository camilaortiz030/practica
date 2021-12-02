
import { Model, DataTypes } from 'sequelize';
export default class Curso extends Model {
  static init(sequelize) {
    return super.init(
      {
        Horario: DataTypes.STRING,
        idMateria: DataTypes.INTEGER,
        idProfesor: DataTypes.INTEGER
      },
      {

        sequelize,
        modelName: 'Curso',
      }
    );
  }

}