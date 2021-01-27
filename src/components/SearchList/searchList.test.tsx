import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'

import { SearchList } from './index';
import { Profile } from '../../models/index';

const mockProfiles = [
  {
    id: 'test',
    name: 'Test',
    avatar: 'http://google.com',
    email: 'test@test.com',
    description: 'test description'
  },
  {
    id: 'test1',
    name: 'Test1',
    avatar: 'http://google.com',
    email: 'test1@test.com',
    description: 'test description1'
  }
] as Profile[];

test('check render profile correctly', () => {
  render(<SearchList profiles={mockProfiles} />);
  for (let i = 0; i < mockProfiles.length; i += 1) {
    expect(screen.queryByText(mockProfiles[i].name)).toBeInTheDocument();
    expect(screen.queryByText(mockProfiles[i].description)).toBeInTheDocument();
    expect(screen.queryByAltText(`profile_${mockProfiles[i].id}`)).toBeInTheDocument();
  }
});