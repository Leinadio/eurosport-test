import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './'

describe('Loading', function () {
  it('should loading', () => {
    const tree = renderer
      .create(<Loading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});