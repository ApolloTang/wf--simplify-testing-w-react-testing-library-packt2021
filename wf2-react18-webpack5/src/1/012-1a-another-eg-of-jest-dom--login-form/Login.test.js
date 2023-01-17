import React from 'react';
import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import Login from './Login';

test('Login, given credentials, returns enabled submit button', () => {
  render(<Login />);

  const username = screen.getByRole('textbox', { name: /username/i });
  const password = screen.getByLabelText(/password/i);
  const rememberMe = screen.getByRole('checkbox');
  const loginBtn = screen.getByRole('button', { name: /login/i });

  const fakeUser = {
    username: 'test user',
    password: '123password',
  };
  fireEvent.change(username, { target: { value: fakeUser.username } });
  fireEvent.change(password, { target: { value: fakeUser.password } });
  fireEvent.click(rememberMe);

  expect(screen.getByTestId('form')).toHaveFormValues({
    username: fakeUser.username,
    password: fakeUser.password,
    rememberMe: true,
  });

  expect(loginBtn).not.toBeDisabled();
});
