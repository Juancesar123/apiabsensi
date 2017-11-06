// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pegawai = sequelizeClient.define('mst_pegawai', {
    Nomor_Induk: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Nama: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TglLahir: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TempatLahir: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Jenis: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Alamat: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Goldar: {
      type: Sequelize.STRING,
      allowNull: false
    },
    StatusPegawai: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Jabatan: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Agama: {
      type: Sequelize.STRING,
      allowNull: false
    },
    StatusNikah: {
      type: Sequelize.STRING,
      allowNull: false
    },
    NoKtp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telepon: {
      type: Sequelize.STRING,
      allowNull: false
    },
    HP: {
      type: Sequelize.STRING,
      allowNull: false
    },
    emailPribadi: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Foto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Status_Rec: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Kode_Sekolah: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  pegawai.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pegawai;
};
