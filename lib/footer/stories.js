import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Footer', module).add('with basic footer', () => (
  <div class="partial__footer">
    <div class="container">
      <div class="two-thirds column">
        <p>
          <a href="#">Return to Top</a>
        </p>
        <p>
          We are UB ACM, University at Buffalo's undergraduate computer science
          organization. Our mission is to empower student peers and help them
          find their path in computer science.
        </p>
        <p>
          UB ACM hosts a variety of extracurricular events to achieve our goal.
          We have weekly meetings where our members or speakers run workshops
          and tech talks on the latest technologies used by professionals in
          industry or academia. Additionally, we run events like Hack Night and
          social events to allow students to connect with others with similar
          interests.
        </p>
      </div>
      <div class="one-third column">
        &copy; 2018 UB ACM
        <br />
        <br />
        <ul class="links">
          <li>
            <a href="https://ubacm.slack.com/signup" target="_blank">
              Slack
            </a>
          </li>
          <li>
            <a href="https://github.com/ubacm" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ubacm.org" target="_blank">
              Facebook
            </a>
          </li>
          <br />
          <li>
            <a href="https://github.com/ubacm/ubacm.org" target="_blank">
              Website built by UB ACM
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
))
