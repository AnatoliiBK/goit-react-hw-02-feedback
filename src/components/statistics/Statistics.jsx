import PropTypes from "prop-types";
import React, { Component } from "react";

export class Statistics extends Component {
  render() {
    return (
      <>
        <p style={{ fontSize: "26px" }}>Good: {this.props.good}</p>
        <p style={{ fontSize: "26px" }}>Neutral: {this.props.neutral}</p>
        <p style={{ fontSize: "26px" }}>Bad: {this.props.bad}</p>
        <p style={{ fontSize: "26px" }}>Total: {this.props.total}</p>
        <p style={{ fontSize: "30px" }}>
          Positive feedback: {this.props.positivePercentage}%
        </p>
      </>
    );
  }
}


// export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
//     return (
//       <>
//         <p style={{ fontSize: "26px" }}>Good: {good}</p>
//         <p style={{ fontSize: "26px" }}>Neutral: {neutral}</p>
//         <p style={{ fontSize: "26px" }}>Bad: {bad}</p>
//         <p style={{ fontSize: "26px" }}>Total: {total}</p>
//         <p style={{ fontSize: "30px" }}>Positive feedback: {positivePercentage}%</p>
//       </>
//     );
//   }


Statistics.propTypes = {    
    good: PropTypes.number.isRequired,   
    neutral: PropTypes.number.isRequired,  
    bad: PropTypes.number.isRequired,  
    total: PropTypes.number.isRequired,  
    positivePercentage: PropTypes.number.isRequired
  };