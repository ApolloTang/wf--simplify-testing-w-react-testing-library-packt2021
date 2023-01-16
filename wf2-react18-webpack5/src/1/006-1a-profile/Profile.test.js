import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Profile from './Profile';
import { act } from 'react-dom/test-utils';

import {prettyDOM} from '@testing-library/dom'

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

  const container  = rendered.container
  // console.log(prettyDOM(container))

  const expectedDetailedElement = container.querySelector('.card-text.details')
  // console.log(prettyDOM(expectedDetailedElement))
  expect(expectedDetailedElement).toHaveTextContent('This is my 5th year and I love helping others')
  expect(expectedDetailedElement).toBeInTheDocument()

  const hideDetailsBtn = container.querySelector('.btn.btn-primary');
  // console.log(prettyDOM(hideDetailsBtn))

  fireEvent(hideDetailsBtn, new MouseEvent('click', { bubbles: true }));
  expect(container.querySelector('.card-text.details')).not.toBeInTheDocument();
});
