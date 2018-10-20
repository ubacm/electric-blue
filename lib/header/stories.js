import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Header', module).add('with basic header', () => (
  <div className="component__header">
    <div className="container">
      <div className="wrapper">
        <div className="branding">
          <a href="/">
            <img className="logo" src="https://ubacm.org/assets/ubacm.png" />
          </a>
        </div>
        <div className="navigation">
          <ul className="links">
            <li>
              <a href="#">Return to UB ACM</a>
            </li>
          </ul>
          <ul className="links hide_mobile">
            <li>Non-link</li>
          </ul>
          <ul className="links">
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
))
