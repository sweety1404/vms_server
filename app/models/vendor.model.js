const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the Vendor model
const Vendor = sequelize.define('Vendor', {
  // Define vendor attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Other vendor attributes
});

// Sync the model with the database
(async () => {
  await sequelize.sync();
  console.log('Vendor model synced with database');
})();

module.exports = { Vendor };
