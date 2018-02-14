import sinon from 'sinon';
import fizzBuzz from '../../src/chapterTwo/fizzBuzz';

describe('Chapter 2 - FizzBuzz', () => {
  it('logs out the numbers 1 - 100', () => {
    const spy = sinon.spy(console, 'log');

    fizzBuzz();

    sinon.assert.callCount(spy, 100);
    sinon.assert.calledWith(spy, 'Fizz');
    sinon.assert.calledWith(spy, 'Buzz');
    sinon.assert.calledWith(spy, 'FizzBuzz');

    spy.restore();
  });
});
