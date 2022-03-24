import React from 'react';
import { render } from '@testing-library/react';
import LazyLoadAComponent from './lazy-load-a-component'; // eslint-disable-line import/no-duplicates
import { promise } from './lazy-load-a-component'; // eslint-disable-line import/no-duplicates


test('lazy load a component', async (done) => {
  const {
    container: beforeLoad
    // , debug
  } = render(<LazyLoadAComponent />);

  // eslint-disable-next-line
  // debug(beforeLoad.firstChild);

  expect(beforeLoad.firstChild).toMatchSnapshot();

  await promise;

  const { container: afterLoad } = render(<LazyLoadAComponent />);

  // eslint-disable-next-line
  // debug(afterLoad.firstChild)

  expect(afterLoad.firstChild).toMatchSnapshot();

  done();
});
