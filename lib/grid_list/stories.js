import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Grid List', module).add('with basic list grid', () => (
  <ul className="grid_list">
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div className="item">
          <strong>Item</strong>
          <div>Other stuff</div>
        </div>
      </a>
    </li>
  </ul>
))
storiesOf('Grid List', module).add('with list grid inside container', () => (
  <div className="container contents">
    <ul className="grid_list">
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div className="item">
            <strong>Item</strong>
            <div>Other stuff</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
))
