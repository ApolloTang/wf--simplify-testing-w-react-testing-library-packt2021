import React from 'react';
import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';

import { act } from 'react-dom/test-utils';

import Profile from './Profile';

it('hides details when button clicked', async() => {
  await act(
    async () => {
      render(
        <Profile
          name="John Doe"
          title="Team Lead"
          details="This is my 5th year and I love helping others"
        />
      )
    }
  )

  const {
    container,
    getByText,
    queryByText, // <-- see: https://testing-library.com/docs/react-testing-library/cheatsheet/#queries
    getByRole,
  }  = screen
  // screen.debug()

  expect(getByText('This is my 5th year and I love helping others')).toBeInTheDocument()
  //                                                                ^^^^^^^ This is a feature of jest-dom

  const hideDetailsBtn = getByRole('button', { name: /hide details/i})
  fireEvent.click(hideDetailsBtn)

  expect(queryByText('This is my 5th year and I love helping others')).not.toBeInTheDocument()
  //                                                                ^^^^^^^ This is a feature of jest-dom
});
