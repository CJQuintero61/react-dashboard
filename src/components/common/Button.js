/*
  Button.js

  A reusable button for the app
*/
import PropTypes from 'prop-types';

function Button({ text, onClick, type, variant = 'default' }) {
  /*
    Creates a styled button

    Args:
      text (str) - the words on the button
      onClick (function) - the callback function done when the button is clicked
      type (str) - the HTML button type like 'submit' or 'button'
      variant (str) - the style class for the button to create such as "nav"
    
    Returns:
      <button> - a button element that is labeled and does something
  */

  // add the button's style classes as the general button style
  // and the specific button style depending on its variant param
  const classes = `btn btn-${variant}`;

  return (
    <button type={type} className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

/*
  text (req) - a button label is required

  onClick (optional) - not required since a submit button uses onSubmit instead

  type (req) - need to know what kind of button this is. This app only supports
    regular buttons and submit buttons

  variant (optional) - the style variant to apply to the button.
    if not provided, default styling is done
*/
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  variant: PropTypes.string,
};

export default Button;
