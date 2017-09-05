const assert = require('assert');
const app = require('../../src/app');

describe('\'datasiswa\' service', () => {
  it('registered the service', () => {
    const service = app.service('datasiswa');

    assert.ok(service, 'Registered the service');
  });
});
