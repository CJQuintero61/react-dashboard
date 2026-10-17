/*
  ClassList.js

  A component that makes the class list by
  returning a <ul> element to App.js
*/
import PropTypes from 'prop-types';
import ClassItem from './ClassItem';

function ClassList({ classList }) {
  /*
    creates the class list <ul> element

    Args:
      classList (list) - the classes in a list to show
    
    Returns:
      <ul> - the unordered list element back to App with the classes built
  */

  // it's worth mentioning that classes cannot be added or removed
  // so there will always be 4 classes which are coded in data.js

  return (
    <ul className="class-list">
      {/* 
        .map creates and returns a new ClassItem for each class
        then all classes get nested in the <ul>

        This is the basically the same logic as TaskList.js, just
        without the adding/removing feature
      */}
      {classList.map(classItem =>(
        <ClassItem
          key={classItem.id}
          courseName={classItem.courseName}
          desc={classItem.desc}
        />
      ))}
    </ul>
  )
}

ClassList.propTypes = {
  classList: PropTypes.array.isRequired,
};

export default ClassList;
