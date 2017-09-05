// Initializes the `datasiswa` service on path `/datasiswa`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datasiswa.model');
const hooks = require('./datasiswa.hooks');
const filters = require('./datasiswa.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datasiswa',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/datasiswa', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datasiswa');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
