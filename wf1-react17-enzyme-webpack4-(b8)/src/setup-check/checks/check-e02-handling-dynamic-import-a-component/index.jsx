import React from 'react'
import ReactDom from 'react-dom'

import LazyLoadAComponent from './lazy-load-a-component.jsx'

const portal = document.createElement('div')
portal.className = 'portal'
document.body.appendChild(portal)

ReactDom.render(
  <>
    <div>lazy loaded component will appear below: </div>
      <LazyLoadAComponent />
    <hr/>
  </>
, portal)
