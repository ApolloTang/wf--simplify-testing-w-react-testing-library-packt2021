// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
type C = React.Component

const CheckboxWithLabel = require('./checkbox-w-label').default


it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument<C>(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  ) as C

  const checkboxNode = ReactDOM.findDOMNode(checkbox) as HTMLElement

  // Verify that it's Off by default
  expect(checkboxNode.textContent).toEqual('Off')

  // Simulate a click and verify that it is now On
  TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'),
  )
  expect(checkboxNode.textContent).toEqual('On')
})
