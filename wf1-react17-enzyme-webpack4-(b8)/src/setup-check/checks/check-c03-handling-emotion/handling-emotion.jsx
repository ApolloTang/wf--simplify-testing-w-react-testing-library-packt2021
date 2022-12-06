import React from 'react';

import {
  // jsx,  //<-- this is not required b/c we are using "@emotion/babel-preset-css-prop"
  css
} from '@emotion/core'
import styled from '@emotion/styled'

const color = 'white'
const bgColor = 'hsl(100, 30%, 60%)'

const myStyle = css`
  padding:  10px;
  background-color: ${bgColor};
  font-size: 16px;
  border-radius: 4px;
  &:hover { color: ${color};
}`

const Button = styled.button`
  color: ${bgColor};
`

const MyComponentWithEmotion = () => (
  <>
    <hr/>
    <div css={myStyle} >
      This is styled by @emotion, hover to change color.
    </div>
    <Button>this is a styled.button</Button>
    <hr/>
  </>
)

export default MyComponentWithEmotion;
