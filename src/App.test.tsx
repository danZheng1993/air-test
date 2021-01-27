import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen, createEvent} from '@testing-library/react'

import { enableFetchMocks } from 'jest-fetch-mock'

import App from './App';
import { Profile } from './models/index';

enableFetchMocks()

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
  },
  {
    id: 'test2',
    name: 'Test2',
    avatar: 'http://google.com',
    email: 'test1@test.com',
    description: 'test description1'
  }
] as Profile[];

test('check render profile correctly', async () => {
  fetch.mockResolvedValueOnce({ json: () => mockProfiles })
  render(<App />);
  const component = await screen.findByText('Test');
  expect(component).toBeInTheDocument();
  const searchInput = await screen.findByTestId("search_input");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: 'Test2' } });
  const searchResult = await screen.queryByText(mockProfiles[2].name);
  expect(searchResult).toBeInTheDocument();
  expect(screen.queryByText(mockProfiles[1].name)).toBeNull();
});