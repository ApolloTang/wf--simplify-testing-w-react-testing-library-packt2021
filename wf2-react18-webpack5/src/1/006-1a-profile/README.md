##  `Profile--1a-without-jest-dom.test.js` 

This demo trying to illustrate the following: 

The following will be truety when text `foo` is found:

```
render(<comomponent/>).getByText('foo')
```

Thus: 

```
expect(getByText('foo')).toBeTruthy()
```

see reference: [Queries](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries)

---

##  `Profile--1b-with-jest-dom.test.js`

This demo trying to illustrate the following: 

With `jest-dom` install, instead of writing: 

```
expect(getByText('foo')).toBeTruthy()
```

we can write:

```
expect(getByText('This is my 5th year and I love helping others')).toBeInTheDocument()
```

Which is more readable.



---

## `Profile--2a-using-screen.test.js`

This demo trying to illustrate the following: 

Instead of writing this way:

```js
  import {
    render
  } from '@testing-library/react';

  let rendered  ///<---- this is awkward,,

  await act(
    async () => {
      rendered = render(<MyComponent/>)
    }
  )

  const {
    container,
    getByText,
    queryByText,
    getByRole,
  }  = rendered
  console.log(prettyDOM(container))
```

You can write it like this using `screen`:

```js
import React from 'react';
import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';

// ... 


  await act(
    async () => {
      render(<MyComponent/>)
    }
  )

  const {
    container,
    getByText,
    queryByText,
    getByRole,
  }  = screen
  
  screen.debug()
```

Note that the awkward `let rendered` is no longer needed.







