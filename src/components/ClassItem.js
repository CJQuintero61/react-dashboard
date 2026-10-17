/*
  ClassItem.js

  A component that makes a class item
  in a <li>
*/
import PropTypes from 'prop-types';

function ClassItem({ courseName, desc }) {
  /*
    returns a <li> for the current class object

    Args:
      courseName (str) - the class name
      desc (str) - the class description
    
    Returns:
      <li> - the class item in a list element to add to the ClassList
  */

  return (
    <li className="class-item">
      {/* make the course name pop more than the desc */}
      <h3 className="class-name">
        {courseName}
      </h3>
      {desc}
    </li>
  )
}

ClassItem.propTypes = {
  courseName: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ClassItem;
