import React from  'react'
import { render, screen } from '@testing-library/react'
import Jumbotron from './Jumbotron'


it('displays the heading', () => {
  render(<Jumbotron />)

  const {getByText} = screen
  expect(
    getByText(/welcome to our site!/i)
  )
})

//
// The getByRole method allows you to query the DOM in ways similar
// to how anyone, including those using screen readers, would search.
// A screen reader would look for an element with the role heading
// and the text welcome to our site!. There are many other methods
// available on the screen object to query elements based on how
// you decide to find them. The DOM Testing Library team recommends
// using the getByRole method to select elements as much as possible
// in the documentation.
//
it('displays the heading  (By Role)', () => {
  render(<Jumbotron />)

  const {getByRole} = screen
  expect(
    getByRole('heading',  { name: /welcome to our site!/i} )
  )
})

