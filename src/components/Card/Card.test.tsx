import React from 'react';
import renderer from 'react-test-renderer';
import Card from './'

const props = {
  url: 'test',
  firstname: 'jon',
  lastname: 'snow',
  shortname: 'js',
  sex: 'man',
  age: 25,
  height: 185,
  weight: 8500,
  points: 3200,
  rank: 1,
  last: [true, true, true],
  country: {
    code: 'SUI',
    picture: {
      url: 'imgflag'
    }
  }
}
describe('showWinsLoses', function () {
  it('should display red dot', () => {
    const tree = renderer
      .create(<Card {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});