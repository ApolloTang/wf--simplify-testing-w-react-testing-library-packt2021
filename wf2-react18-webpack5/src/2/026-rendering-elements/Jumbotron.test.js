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

// P028
// ----
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


/*
 P028--p029
 ----------

 This is the output of Jest when it can't find the match using getByRole
 (Remove ".skip" in next tests to see output.)

  ● displays the heading with text "fake" (using getByRole)

    TestingLibraryElementError: Unable to find an accessible element
    with the role "heading" and name `/fake!/i`

    Here are the accessible roles:

      banner:
      ....
      ....
      heading:
      ....
      ....
      navigation:
      ....
      ....

 Note above that when using getByRole, the message logged out all the selectable.
 the logged elements help by providing a visual representation
 of the DOM to understand better why the element you searched for was not found.

 Compare this to when using getByText:

 This is the output of jest when *NOT* using getByRole:

  ● displays the text "fake"  (not using getByRole)

      TestingLibraryElementError: Unable to find an element with
      the text: /fake!/i. This could be because the text is broken
      up by multiple elements. In this case, you can provide a function
      for your text matcher to make your matcher more flexible.

*/
it.skip('displays the heading with text "fake" (using getByRole)', () => {
  render(<Jumbotron />)

  const {getByRole} = screen
  expect(
    getByRole('heading',  { name: /fake!/i} )
  )
})
it.skip('displays the text "fake"  (not using getByRole)', () => {
  render(<Jumbotron />)

  const {getByText} = screen
  expect(
    getByText('/fake!/i')
  )
})


/*
 p029 Jest-dom
 -------------

 We can use the toBeInTheDocument method from jest-dom to make this test
 more readable.
*/
it('displays the heading  (By Role, with jest-dom for readability)', () => {
  render(<Jumbotron />)

  const {getByRole} = screen
  expect(
    getByRole('heading',  { name: /welcome to our site!/i} )
  ).toBeInTheDocument()    //  <-- toBeInTheDocument is a method adde by
                           // Jest-dom make this test even more descriptive
})

/*
 p030 Jest-dom (no match)
 ------------------------

 This is the output of Jest when it can't find the match using getByRole
 (Remove ".skip" in next tests to see output.)

  ● displays the heading with text "fake" (using getByRole)

    TestingLibraryElementError: Unable to find an accessible element
    with the role "heading" and name `/fake!/i`

    Here are the accessible roles:

      banner:
      ....
      ....
      heading:
      ....
      ....
      navigation:
      ....
      ....
*/
it.skip('displays the heading -- NO match  (By Role, with jest-dom for readability)', () => {
  render(<Jumbotron />)

  const {getByRole} = screen
  expect(
    getByRole('heading',  { name: /fake/i} )
  ).toBeInTheDocument()    //  <-- toBeInTheDocument is a method adde by
                           // Jest-dom make this test even more descriptive
})
