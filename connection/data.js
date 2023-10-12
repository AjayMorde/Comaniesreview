
const Sequelize = require('sequelize');
const sequelize = require('./database'); 

const Review = sequelize.define('Review', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pros: {
    type: Sequelize.TEXT, 
    allowNull: true,     
  },
  cons: { 
    type: Sequelize.TEXT,
    allowNull: true,
  },
  rating: {
    type: Sequelize.INTEGER, 
    allowNull: true,
  },
});

module.exports = Review;
