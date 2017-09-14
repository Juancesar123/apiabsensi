const users = require('./users/users.service.js');
const pegawai = require('./pegawai/pegawai.service.js');
const datasiswa = require('./datasiswa/datasiswa.service.js');
const mstKelas = require('./mst-kelas/mst-kelas.service.js');
const mstUseraccess = require('./mst-useraccess/mst-useraccess.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(pegawai);
  app.configure(datasiswa);
  app.configure(mstKelas);
  app.configure(mstUseraccess);
};
