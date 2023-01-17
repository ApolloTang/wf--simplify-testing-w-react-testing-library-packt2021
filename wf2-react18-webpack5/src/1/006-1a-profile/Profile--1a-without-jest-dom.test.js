import React from 'react';
import {
  fireEvent,
  render
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {prettyDOM} from '@testing-library/dom'

import Profile from './Profile';

it('hides details when button clicked', async() => {
  let rendered

  await act(
    async () => {
      rendered = render(
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
  }  = rendered
  // console.log(prettyDOM(container))

  expect(getByText('This is my 5th year and I love helping others')).toBeTruthy()

  const hideDetailsBtn = getByRole('button', { name: /hide details/i})
  fireEvent.click(hideDetailsBtn)

  expect(queryByText('This is my 5th year and I love helping others')).toBeFalsy()
});
