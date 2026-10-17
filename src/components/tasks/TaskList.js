/*
  TaskList.js

  this component is the task list that displays
  the current tasks in the tasks array.
*/
import PropTypes from 'prop-types';

import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask }) {
  /*
    this component creates the task list

    Args:
      tasks (list) - the list of tasks to show
      deleteTask (function) - the callback function from App for
        deleting a task
    
    Returns:
      <ul> - a list element with the built <li> elements for each task
        or <p> if there are no tasks
  */
  
  // show a message when there are no tasks
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {/* 
        .map creates and returns a new TaskItem item for each task
        then all tasks get nested in the <ul>
      */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
