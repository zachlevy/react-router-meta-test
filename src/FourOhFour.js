import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FourOhFour extends Component {
  componentDidMount() {
    console.log("componentDidMount")

  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>asdf</h1>
        <Redirect to="/test-meta/" />
      </div>
    )
  }
}

export default FourOhFour
