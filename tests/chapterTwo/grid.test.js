import { expect } from 'chai';
import grid from '../../src/chapterTwo/grid';

describe('Chapter 2 - Grid', () => {
  it('returns an 8 x 8 grid', () => {
    const run = grid(8);
    const gridEight = ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';

    expect(run).to.equal(gridEight);
  });

  it('returns \' Please enter a positive integer greater than zero\'', () => {
    const run = grid(0);

    expect(run).to.equal('Please enter a positive integer greater than zero');
  });

  it('returns \' Please enter a positive integer greater than zero\'', () => {
    const run = grid(-3);

    expect(run).to.equal('Please enter a positive integer greater than zero');
  });

  it('returns \' Please enter a positive whole number integer greater than zero\'', () => {
    const run = grid(2.58);

    expect(run).to.equal('Please enter a positive whole number integer greater than zero');
  });
});
