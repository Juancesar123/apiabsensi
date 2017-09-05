// Initializes the `pegawai` service on path `/pegawai`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pegawai.model');
const hooks = require('./pegawai.hooks');
const filters = require('./pegawai.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pegawai',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pegawai', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pegawai');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
