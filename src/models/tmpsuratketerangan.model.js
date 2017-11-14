// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tmpsuratketerangan = sequelizeClient.define('tmpsuratketerangan', {
    id :{
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gambar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  tmpsuratketerangan.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tmpsuratketerangan;
};
