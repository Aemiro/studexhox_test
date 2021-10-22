'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(models.Rating,{
        foreignKey:'student_id'
      })
    }
  }
  Student.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique:true
    },
    phone:{
      type:DataTypes.STRING,
      unique:true
    },
    current_class:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    department:{
      type:DataTypes.STRING,
      allowNull: true
    },
    gender:{
      type:DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};