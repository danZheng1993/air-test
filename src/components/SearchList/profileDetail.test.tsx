import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import { ProfileDetail } from './profileDetail';
import { Profile } from '../../models/index';

const mockProfile = {
  id: 'test',
  name: 'Test',
  avatar: 'http://google.com',
  email: 'test@test.com',
  description: 'test description'
} as Profile;

test('check render profile correctly', () => {
  render(<ProfileDetail profile={mockProfile} />);
  expect(screen.queryByText(mockProfile.name)).toBeInTheDocument();
  expect(screen.queryByText(mockProfile.description)).toBeInTheDocument();
  expect(screen.queryByAltText(`profile_${mockProfile.id}`)).toBeInTheDocument();
});