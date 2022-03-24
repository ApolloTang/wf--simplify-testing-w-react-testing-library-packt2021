import React from 'react'
import ReactDom from 'react-dom'

import HandlingTsx from './checkbox-w-label.tsx'

const portal = document.createElement('div')
portal.id = 'handling-tsx'
document.body.appendChild(portal)

ReactDom.render(
<>
  component written in txs will appear here:
  <HandlingTsx />
  <hr/>
</>, portal);

