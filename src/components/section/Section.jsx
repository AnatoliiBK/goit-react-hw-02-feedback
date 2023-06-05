import PropTypes from "prop-types";
import React, { Component } from "react";

export class Section extends Component {
  render() {
    return (
      <section style={{ paddingLeft: "60px" }}>
        <h2 style={{ fontSize: "40px" }}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}


// export const Section = ({ title, children }) => {
    
//     return (
//       <section style={{ paddingLeft: "60px" }}>
//         <h2 style={{ fontSize: '40px' }}>{title}</h2>
//         {children}
//       </section>
//     );
//   }
  
 
  Section.propTypes = {   
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  };