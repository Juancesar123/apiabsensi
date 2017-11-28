// Initializes the `importdatasiswa` service on path `/importdatasiswa`
const createService = require('feathers-sequelize');
const createModel = require('../../models/importdatasiswa.model');
const hooks = require('./importdatasiswa.hooks');
const filters = require('./importdatasiswa.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'importdatasiswa',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/importdatasiswa', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('importdatasiswa');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
