import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   
    return (
      <>
        {options.map((option) => (
          <button
            key={option}
            style={{ fontSize: '24px', margin: '10px' }}
            onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </>
    );
  }
  
 
FeedbackOptions.propTypes = {   
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};