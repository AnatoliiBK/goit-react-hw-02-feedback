import PropTypes from "prop-types";
import React, { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option) => (
          <button
            key={option}
            style={{ fontSize: "24px", margin: "10px" }}
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}


// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   
//     return (
//       <>
//         {options.map((option) => (
//           <button key={option} style={{ fontSize: '24px', margin: '10px' }} onClick={() => onLeaveFeedback(option)}>
//             {option}
//           </button>
//         ))}
//       </>
//     );
//   }
  
 
  FeedbackOptions.propTypes = {   
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
  };