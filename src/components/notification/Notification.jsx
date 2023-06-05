import PropTypes from "prop-types";

import React, { Component } from "react";

export class Notification extends Component {
  render() {
    return <p style={{ fontSize: "24px" }}>{this.props.message}</p>;
  }
}

// export const Notification = ({ message }) => {
//     return <p style={{ fontSize: '24px' }}>{message}</p>;
//   }
  
  
  Notification.propTypes = {
    message: PropTypes.string.isRequired
  };