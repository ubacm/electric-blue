import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Notification', module).add('with basic notification', () => (
  <div>
    <div className="notification">This is a notification.</div>
    <div className="notification">This is a notification.</div>
    <div className="notification">This is a notification.</div>
  </div>
))
