import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Container', module)
  .add('with basic usage', () => (
    <body>
      <div className="container contents">
        <h1>Container Example</h1>
        <p>This is a test.</p>
      </div>
    </body>
  ))
  .add('with dark module', () => (
    <body className="dark">
      <div className="container contents">
        <h1>Container Example</h1>
        <p>This is a test.</p>
      </div>
    </body>
  ))
