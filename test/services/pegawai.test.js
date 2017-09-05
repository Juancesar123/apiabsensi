const assert = require('assert');
const app = require('../../src/app');

describe('\'pegawai\' service', () => {
  it('registered the service', () => {
    const service = app.service('pegawai');

    assert.ok(service, 'Registered the service');
  });
});
