/*
  TaskSummary.js

  shows how many tasks are complete
*/
import PropTypes from 'prop-types';

function TaskSummary({ completed, total }) {
  /*
    Shows how many tasks are completed

    Args:
      completed (int) - the # of tasks done
      total (int) - the total # of tasks
  */
  return (
    <p className="task-summary">
      {completed} of {total} tasks completed
    </p>
  );
}

TaskSummary.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default TaskSummary;
