import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Hero', module).add('with basic header', () => (
  <div className="partial__hero" style={{background: '#1e1e1e'}}>
    <div className="container">
      <div className="hero_copy">
        <h1>Hero</h1>
      </div>
    </div>
  </div>
))
