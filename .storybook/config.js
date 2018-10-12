import {configure} from '@storybook/react'
import '../dist/electricblue.min.css'

// Dynamically look for all stories.js files in components.
const req = require.context('../lib', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
