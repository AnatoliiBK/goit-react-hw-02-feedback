import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
    
    return (
      <section style={{ paddingLeft: "60px" }}>
        <h2 style={{ fontSize: '40px' }}>{title}</h2>
        {children}
      </section>
    );
  }
  
 
Section.propTypes = {   
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};