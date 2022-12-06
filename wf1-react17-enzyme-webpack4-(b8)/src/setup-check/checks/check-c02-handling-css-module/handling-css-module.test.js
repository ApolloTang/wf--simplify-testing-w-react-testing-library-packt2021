import {render} from '@testing-library/react';
import React from 'react';
import MyComponentWithCssModule from './handling-css-module.jsx';

test('It handle css module with identity-obj-proxy check', ()=>{
  const {container} = render(<MyComponentWithCssModule />);
  console.log('xx identity-obj-proxy: ', container.innerHTML)
  expect(container.innerHTML).toMatch('classNameOfMyComponentWithCssModule');
});
