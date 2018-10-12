import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Buttons', module).add('with basic buttons', () => (
  <div>
    <a className="button">I am a button.</a>
    <a className="button button_primary">I am a primary button.</a>
    <a className="button button_secondary">I am a secondary button.</a>
  </div>
))
