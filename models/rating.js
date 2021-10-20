'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Course);
      Rating.belongsTo(models.Student);
    }
  }
  Rating.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    score: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    student_id: Sequelize.UUID,
    course_id: Sequelize.UUID
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};