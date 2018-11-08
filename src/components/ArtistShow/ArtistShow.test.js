import React from 'react';
import { shallow } from 'enzyme';
import { ArtistShow } from './ArtistShow';

jest.mock('../../Utils/backendApiCalls');

describe('ArtistShow component', () => {
  let wrapper;
  let mockId;

  beforeEach(() => {
    mockId = 4;
    wrapper = shallow(<ArtistShow id={mockId} />, {
      disableLifecycleMethods: true
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
