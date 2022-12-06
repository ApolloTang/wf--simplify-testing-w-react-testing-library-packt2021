import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from './my-component.jsx';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const div = document.createElement('div');
// afterEach(() => {
//   console.log('after each: ', div.outerHTML);
// });

it('Enzyme setup, and renders without crashing', ()=>{
  ReactDom.render(<MyComponent />, div);
  // console.log(div.outerHTML);
  ReactDom.unmountComponentAtNode(div);
})

console.log(div.outerHTML);

