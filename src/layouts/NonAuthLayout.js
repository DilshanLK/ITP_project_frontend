import PropTypes from 'prop-types'
import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class NonAuthLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.capitalizeFirstLetter.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  // componentDidMount() {
  //   let currentage = this.capitalizeFirstLetter(this.props.location.pathname)

  //   document.title =
  //     currentage + " | Skote - Responsive Bootstrap 5 Admin Dashboard"
  // }
  render() {
    // return <div style={{background: "linear-gradient(#e66465, #9198e5)",height: '100%'}}>{this.props.children}</div>
    return <div>{this.props.children}</div>
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default withRouter(NonAuthLayout)
