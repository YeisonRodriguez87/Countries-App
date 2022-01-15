const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('name', () => {      
      it('should work when its a valid name', () => {
        Activity.create({ name: 'soccer' });
      });
      it('should work when its a valid difficulty', () => {
        Activity.create({ name: '1' });
      });
      it('should work when its a valid duration', () => {
        Activity.create({ name: '6' });
      });
      it('should work when its a valid season', () => {
        Activity.create({ name: 'winter' });
      });
    });
  });
});