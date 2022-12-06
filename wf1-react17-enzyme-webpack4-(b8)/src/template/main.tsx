import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

console.log('this is main.jsx')

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);

