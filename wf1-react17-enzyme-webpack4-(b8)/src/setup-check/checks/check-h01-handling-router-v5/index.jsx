import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const PORTAL_NAME = 'router'

const container = document.createElement('div')
container.id = PORTAL_NAME
document.body.appendChild(container)


// ===================================================

const App = () => (
  <Router>
    <div style={{outline: 'solid 1px black', padding: '5px'}}>
      <div>Test router:</div>
      <ul>
        <li><Link to="/">Link to: /</Link></li>
        <li><Link to="/a">Link to: /a</Link></li>
        <li><Link to="/a/b">Link to: /a/b</Link></li>
        <li><Link to="/a/b/c">Link to: /a/b/c</Link></li>
      </ul>

      <Route path="/" component={(props) =><h5>{`props.location.pathname: ${props.location.pathname}`}</h5>} />

      <h5>{'Below are matched <Route/> with the exact flag'}</h5>
      <div>
        <Route exact path="/"      component={()=>(<div>exact path="/"     </div>)} />
        <Route exact path="/a"     component={()=>(<div>exact path="/a"    </div>)} />
        <Route exact path="/a/b"   component={()=>(<div>exact path="/a/b"  </div>)} />
        <Route exact path="/a/b/c" component={()=>(<div>exact path="/a/b/c"</div>)} />
      </div>

      <h5>{'Below are matched <Route/> without the exact flag'}</h5>
      <div>
        <Route path="/"      component={()=>(<div>path="/"     </div>)} />
        <Route path="/a"     component={()=>(<div>path="/a"    </div>)} />
        <Route path="/a/b"   component={()=>(<div>path="/a/b"  </div>)} />
        <Route path="/a/b/c" component={()=>(<div>path="/a/b/c"</div>)} />
      </div>
    </div>
  </Router>
)


// ===================================================
ReactDOM.render(
  <App />,
  document.getElementById(PORTAL_NAME)
)

