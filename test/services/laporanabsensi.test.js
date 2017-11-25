const assert = require('assert');
const app = require('../../src/app');

describe('\'laporanabsensi\' service', () => {
  it('registered the service', () => {
    const service = app.service('laporanabsensi');

    assert.ok(service, 'Registered the service');
  });
});
