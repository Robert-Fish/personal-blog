import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Robert Fish`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2.3),
          }}
        />
        <p>
          Written by <strong>Robert Fish</strong> who lives and breathes
          software development.
          <a href="https://twitter.com/ProgramForAll">
            Come follow me on twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
