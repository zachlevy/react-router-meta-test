import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet"

class Home extends Component {
  render() {
    return (
      <div>
        <p><Link to="/test-meta/">Test</Link></p>
        <Helmet>
          <meta property="og:title" content="Home | React Router Meta Test" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://react-router-meta-test.s3-website-us-east-1.amazonaws.com/" />
          <meta property="og:image" content="https://placehold.it/400x400?text=home" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
        </Helmet>
      </div>
    )
  }
}

export default Home
