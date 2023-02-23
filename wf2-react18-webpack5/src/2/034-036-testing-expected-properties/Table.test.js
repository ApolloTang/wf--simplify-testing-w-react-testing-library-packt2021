import React from 'react'
import { render, screen } from '@testing-library/react'
import fakeEmployees from './mocks/employees'
import Table from './Table'

it('renders with expected values', () => {
  render(<Table employees={fakeEmployees} />)

  //
  // To Read: getByRole()
  //  https://testing-library.com/docs/queries/byrole/#api
  //
  expect(screen.getByRole('cell', { name: /john smith/i })).toBeInTheDocument()
  expect(screen.getByRole('cell', { name: /engineering/i })).toBeInTheDocument()
  expect(screen.getByRole('cell', { name: /designer/i })).toBeInTheDocument()
})



it('has the correct class', () => {
  //
  // Although most of the time we want to avoid implementation details
  // and write our tests from the perspective of the user, there may
  // be times where testing specific details is important to our testing
  // goals. For example, if it might be important to you to verify
  // that the striped color theme is present in the rendered version
  // of the table component.
  //
  render(<Table employees={fakeEmployees} />)
  expect(screen.getByRole('table')).toHaveAttribute( 'class', 'table table-striped')
})
