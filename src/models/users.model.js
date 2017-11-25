// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
  
    nomorinduk: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    uid: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    useracces: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    kodesekolah: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nomorhp: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
    status: {
      type: Sequelize.STRING,
      allowNull: true
    },
    namasekolah: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gambar: {
      type: Sequelize.STRING,
      allowNull: true
    },  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
