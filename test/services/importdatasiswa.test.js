const assert = require('assert');
const app = require('../../src/app');

describe('\'importdatasiswa\' service', () => {
  it('registered the service', () => {
    const service = app.service('importdatasiswa');

    assert.ok(service, 'Registered the service');
  });
});
