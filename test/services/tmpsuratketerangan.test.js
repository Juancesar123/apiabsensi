const assert = require('assert');
const app = require('../../src/app');

describe('\'tmpsuratketerangan\' service', () => {
  it('registered the service', () => {
    const service = app.service('tmpsuratketerangan');

    assert.ok(service, 'Registered the service');
  });
});
