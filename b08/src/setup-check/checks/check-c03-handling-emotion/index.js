import React from 'react';
import ReactDom from 'react-dom';

import HandlingEmotion from './handling-emotion.jsx';

const portal = document.createElement('div');
portal.id = 'handling-css-module-check';
document.body.appendChild(portal);

ReactDom.render(<HandlingEmotion />, portal);

