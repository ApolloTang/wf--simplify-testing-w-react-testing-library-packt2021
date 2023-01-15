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

  expect(container.querySelector('.card-text.details')).toHaveTextContent(
    'This is my 5th year and I love helping others'
  );

  const showDetailsBtn = container.querySelector('.btn.btn-primary');
  fireEvent(showDetailsBtn, new MouseEvent('click', { bubbles: true }));
  expect(container.querySelector('.card-text.details')).not.toBeInTheDocument();
});
