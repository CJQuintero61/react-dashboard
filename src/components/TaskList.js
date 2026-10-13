/*
  TaskList.js

  this component is the task list that displays
  the current tasks in the tasks array.
*/
import PropTypes from 'prop-types';

function TaskList({ tasks }) {
  /*
    this component creates the task list

    Args:
      tasks (list) - the list of tasks to show
    
    Returns:
      <ul> - a list element with the built <li> elements for each task
  */

  return (
    <ul className="task-list">
      {/* 
        .map creates and returns a new <li> item for each task
        then all tasks get nested in the <ul>
      */}
      {tasks.map(task => (
        <li key={task.id}>
          {task.text} - due: {task.due}
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
