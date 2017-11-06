const assert = require('assert');
const app = require('../../src/app');

describe('\'dataperson\' service', () => {
  it('registered the service', () => {
    const service = app.service('dataperson');

    assert.ok(service, 'Registered the service');
  });
});
