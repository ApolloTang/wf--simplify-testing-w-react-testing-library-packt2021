import configuration from '../jest-setup-check-configuration.js'

const styleMock = require(`${configuration().testFolderPath}/style-mock.js`)
import importedCssFile from './handling-css-file.css'

test('handling-css-file.test: Jest load css file directly substitude with mock', ()=>{
  expect(importedCssFile).toEqual(styleMock);
})

import exportedCssFile from './handling-css-file.js'
test('handling-css-file.test: Jest run code to load css file and substitude with mock', ()=>{
  expect(exportedCssFile).toEqual(styleMock);
})
