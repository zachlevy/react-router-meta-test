import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet"

class Test extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta property="og:title" content="Test Helmet | React Router Meta Test" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://react-router-meta-test.s3-website-us-east-1.amazonaws.com/test/" />
          <meta property="og:image" content="https://placehold.it/400x400?text=test" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
        </Helmet>
        <p><Link to="/">Home</Link></p>
      </div>
    )
  }
}

export default Test
