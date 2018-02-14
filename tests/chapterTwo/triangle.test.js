// import { assert } from 'chai';
import sinon from 'sinon';
import triangle from '../../src/chapterTwo/triangle';

describe('Chapter 2 - Triangle of Hashes', () => {
  it('logs out a triangle made up of 7 final hashes', () => {
    const spy = sinon.spy(console, 'log');

    triangle();

    sinon.assert.callCount(spy, 7);
    sinon.assert.calledWith(spy, '#');
    sinon.assert.calledWith(spy, '##');
    sinon.assert.calledWith(spy, '###');
    sinon.assert.calledWith(spy, '####');
    sinon.assert.calledWith(spy, '#####');
    sinon.assert.calledWith(spy, '######');
    sinon.assert.calledWith(spy, '#######');

    spy.restore();
  });
});
