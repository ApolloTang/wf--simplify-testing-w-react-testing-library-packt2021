import React from 'react';
import { render } from '@testing-library/react';
import LazyLoadAComponent from './lazy-load-a-component';
// import {promise} from './lazy-load-a-component';
import loadable from 'react-loadable';  // eslint-disable-line import/first

test('lazy load a component (imrpoved)', async (done) => {
  const {
    container: beforeLoad
    // , debug
  } = render(<LazyLoadAComponent />);

  // eslint-disable-next-line
  // debug(beforeLoad.firstChild)

  expect(beforeLoad.firstChild).toMatchSnapshot();

  // eslint-disable-next-line
  // await promise;
  await loadable.preloadAll(); // <--- [!]

  const { container: afterLoad } = render(<LazyLoadAComponent />);

  // eslint-disable-next-line
  // debug(afterLoad.firstChild)

  expect(afterLoad.firstChild).toMatchSnapshot();

  done();
});
