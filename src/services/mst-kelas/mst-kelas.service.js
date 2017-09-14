// Initializes the `mst_kelas` service on path `/masterkelas`
const createService = require('feathers-sequelize');
const createModel = require('../../models/mst-kelas.model');
const hooks = require('./mst-kelas.hooks');
const filters = require('./mst-kelas.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'mst-kelas',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/masterkelas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('masterkelas');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
