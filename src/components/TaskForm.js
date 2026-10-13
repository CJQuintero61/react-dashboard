/*
  TaskForm.js

  This component is the task form that can be filled out
  to add a new task to the task list
*/
import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function TaskForm({ addTask }) {
  /*
    Renders a form for adding a new task

    Args:
      addTask (function) - the callback from App that takes
        a task's text and due date then adds it to the task list
    
    Returns:
      <form> - the form to add a new task
  */

  // get what is currently typed into the form
  const [text, setText] = useState('');
  const [due, setDue] = useState('');

  function handleSubmit(event) {
    // stop the browser from reloading
    event.preventDefault();

    // don't add empty tasks
    if (text.trim() === '') {
      alert('Please fill out the task name!');
      return;
    }

    addTask(text, due);

    // clear input fields
    setText('');
    setDue('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {/* field for task name */}
      <label>
        Task:
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      
      {/* field for task due date */}
      <label>
        Due date:
        <input
          type="date"
          value={due}
          onChange={(event) => setDue(event.target.value)}
        />
      </label>

      {/* submit button */}
      <Button text="Add Task" type="submit" />
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
