#!/usr/bin/env node

/**
 * This script reinstall node package and thus upgrade to the latest npm package
 *
 * ::: Ref :::
 * https://stackabuse.com/reading-and-writing-json-files-with-node-js/
 * https://medium.com/@the_teacher/yarn-upgrade-does-not-update-package-json-solution-9cd6122e6c6c
 * https://www.diigo.com/user/gofish?query=npm-update
 */

'use strict';

const fs = require('fs');
const exec = require('child_process').exec;


fs.readFile('package.json', (err, data) => {
  if (err) throw err;

  let packageContent = JSON.parse(data);

  let depComand = `echo 'no Dependencies'`
  let devDepComand = `echo 'no devDependencies'`

  if (packageContent && packageContent.devDependencies) {
    const devDependencies = Object.keys(packageContent.devDependencies)
    if (devDependencies.length > 0) {
      const devDependenciesString =  devDependencies.join(' ')
      devDepComand = `yarn add -D ${devDependenciesString}`
    }
  }

  if (packageContent && packageContent.dependencies) {
    const dependencies = Object.keys(packageContent.dependencies)
    if (dependencies.length > 0) {
      const dependenciesString =  dependencies.join(' ')
      depComand = `yarn add ${dependenciesString}`
    }
  }

  [
      'pnpm add -D webpack@^4.44.2',
      // 'pnpm add -D webpack-cli@^4.9.2',
      'pnpm add -D webpack-dev-server@^3.11.2',
      'pnpm add -D html-webpack-plugin@^4.3.0',
      'pnpm add -D style-loader@^2.0.0',
      'pnpm add -D css-loader@^5.2.7',
  ].forEach(
  c=>{
    exec(`${c}`, (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`)
      }
    });
  })

  // console.log(`running command: ${devDepComand}`);
  // exec(devDepComand, (error, stdout, stderr) => {
  //   console.log(`stdout: ${stdout}`);
  //   console.log(`stderr: ${stderr}`);
  //   if (error !== null) {
  //     console.log(`exec error: ${error}`)
  //   }
  //
  //   console.log(`running command: ${depComand}`)
  //   exec(depComand ,
  //     (error, stdout, stderr) => {
  //       console.log(`stdout: ${stdout}`)
  //       console.log(`stderr: ${stderr}`)
  //       if (error !== null) {
  //           console.log(`exec error: ${error}`)
  //       }
  //   });
  // });
});
