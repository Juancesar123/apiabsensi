// Initializes the `laporanabsensi` service on path `/laporanabsensi`
const createService = require('feathers-sequelize');
const createModel = require('../../models/laporanabsensi.model');
const hooks = require('./laporanabsensi.hooks');
const filters = require('./laporanabsensi.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'laporanabsensi',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/laporanabsensi', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('laporanabsensi');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
