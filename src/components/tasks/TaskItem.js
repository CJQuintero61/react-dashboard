/*
  TaskItem.js

  displays a single task with a delete button
*/

import PropTypes from 'prop-types';

import Button from '../common/Button';

function TaskItem({ task, markComplete, deleteTask }) {
  /*
    renders 1 task
    
    Args:
      task (object) - the task to display with (id, text, due, completed)
      markComplete (function) - the function to mark a task as complete
      deleteTask (function) - the callback from App that deletes a task by id
    
    Returns:
      <li> - a list item for the current task
  */

  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      {/* clicking the checkbox or the text toggles the task */}
      <label className="task-check">
        {/* checkbox for the completion status */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => markComplete(task.id)}
        />
        
        <span className="task-text">
          {task.text}{task.due && ` - due: ${task.due}`}
        </span>
      </label>

        <Button
          text="Delete"
          type="button"
          variant="delete"
          onClick={() => deleteTask(task.id)}
        />
    </li>
  );
}

// all tasks need to have the task object and a delete button
TaskItem.propTypes = {
  // a task has an id, text, due date, and a completed flag
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    due: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
