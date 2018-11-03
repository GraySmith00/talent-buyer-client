import React from 'react';
import { shallow } from 'enzyme';
import { ArtistTableHeader } from './ArtistTableHeader';

describe('ArtistTableHeader', () => {
  let wrapper;

  beforeEach(() => {
    let mockCategory = 'mock';
    let mockFunc = jest.fn();
    let mockSort = 'mock';
    let mockName = 'mock';

    wrapper = shallow(
      <ArtistTableHeader
        category={mockCategory}
        onClick={mockFunc}
        activeSort={mockSort}
        name={mockName}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
