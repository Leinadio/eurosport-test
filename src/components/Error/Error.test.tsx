import React from 'react';
import renderer from 'react-test-renderer';
import Error from './'

describe('Error', function () {
  it('should display Error', () => {
    const tree = renderer
      .create(<Error />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});