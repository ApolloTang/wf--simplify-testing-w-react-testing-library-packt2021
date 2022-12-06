import {render} from '@testing-library/react';
import React from 'react';
import MyComponentWithEmotion from './handling-emotion.jsx';

import { createSerializer } from 'jest-emotion'
import * as emotion from '@emotion/core'

expect.addSnapshotSerializer(createSerializer(emotion)) // This is not working

test('It handle emotion', ()=>{
  const {container} = render(<MyComponentWithEmotion />);
  console.log('xxx container: ', container.innerHTML)
  expect(container.innerHTML).toMatchSnapshot();
});
