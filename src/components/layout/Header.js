/*
  Header.js

  This component renders the header of the page.
*/
import PropTypes from 'prop-types';

import Button from '../common/Button';


function Header({ currentView, onChangeView, theme, onToggleTheme }) {
  /*
    creates the header component with the page title
    and nav buttons to change the current view.

    Args:
      currentView (string) - the name of the current view being displayed

      onChangeView (function) - the callback function from App that takes a view
        name and updates the current view

      theme (state) - the current theme state

      onToggleTheme (function) - the callback function from App to change the theme
    
    Returns:
      <header> element with buttons
  */ 
  return (
    <header className="header">
      <h1>Productivity Dashboard</h1>

      {/* nav section will toggle the different views */}
      <nav>
        <Button
          text='Classes'
          type='button'
          variant='nav'
          onClick={() => onChangeView('Classes')}
        />
        <Button
          text='To-Do'
          type='button'
          variant='nav'
          onClick={() => onChangeView('To-Do')}
        />
        <Button
          text='Projects'
          type='button'
          variant='nav'
          onClick={() => onChangeView('Projects')}
        />
      </nav>
      {/*
        this is the theme toggle button in the header but outside of <nav>
      */}
      <div className="header-actions">
        <Button
          // Dynamically update the theme toggle text depending on what is currently showing
          text={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          type='button'
          variant='nav'
          onClick={onToggleTheme}
        />
      </div>
    </header>
  );
}

// declare types since type checking and safety is good practice
Header.propTypes = {
  currentView: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
};

export default Header;
