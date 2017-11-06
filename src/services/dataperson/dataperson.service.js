// Initializes the `dataperson` service on path `/dataperson`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dataperson.model');
const hooks = require('./dataperson.hooks');
const filters = require('./dataperson.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dataperson',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dataperson', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dataperson');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
