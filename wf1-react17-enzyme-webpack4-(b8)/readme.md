
To install:

```bash
$ yarn
```

All project/playground are filed under the folder `src/`.

There are multiple project/playground in `src/` folder, the npm scripts to run playground and test on individual project is:

```bash
$ yarn dev ./src/path/to/project       # start webpack playground for the specified project
```

For example:

```bash
$ yarn dev ./src/03-eg-todo-app/01-todo-app
```

will start webpack dev server on project under path `./src/03-eg-todo-app/01-todo-app/` (entry file is index.js). The project will be opened in browser with url: `http://0.0.0.0:<port>/`.
The port number is calculated (up to 10 instances).

----

Some of the folder has file that are stand alone test: `*.test.js` or `*.test.tsx`. To run this test file use:

```bash
$ yarn t1 ./src/path/to/project/filename.test.js     # run jest on the specified file in path
$ yarn t1:w ./src/path/to/project/filename.test.js   # run jest on the specified file in path in watch mode
```

For example:
```bash
$ yarn t1:w ./src/03-eg-todo-app/01-todo-app/tests/app.test.js
```

will run test on the test file `app.test.js` in watch mode.

-----

You can run node on a file:

```bash
$ yarn n ./src/path/to/project/filename.js     # run node on the specified file in path
$ yarn n:w ./src/path/to/project/filename.js   # run node on the specified file in path in watch mode
```

-----

The following script will operate on all projects and files in `./src/`, There is no need to specify path to file:

```bash
$ yarn t:coverage    # run jest coverage of all project
$ yarn t:clearCache  # reset jest's cache
$ yarn t:debug       # run jest with node inspector to debug all project (more details at: https://nodejs.org/en/docs/guides/debugging-getting-started/)
$ yarn lint          # run eslint on all project
$ yarn tsc           # check for type error on all project
$ yarn tsc:w         # check for type error on all project in watch mode
```



