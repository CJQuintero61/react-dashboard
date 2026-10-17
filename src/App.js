/*
  App.js
  
  this is the js for start of the webpage
*/
import { useState } from 'react';
import './App.css';

import Header from './components/layout/Header';
import TaskList from './components/tasks/TaskList';
import TaskSummary from './components/tasks/TaskSummary';
import TaskForm from './components/tasks/TaskForm';
import ClassList from './components/classes/ClassList';

import { TASKS, CLASSES, ABOUT_PROJECT } from './data';

function App() {

  // currentView - the view currently being displayed (Classes on page load)
  // setView - updates currentView and re-renders the app to show the new view
  const [currentView, setView] = useState('Classes');
  const [tasks, setTasks] = useState(TASKS);
  const [classes] = useState(CLASSES);
  const [theme, setTheme] = useState('dark'); // for the theme toggle - it starts in dark mode

  function addTask(text, due) {
    /*
      adds a new task to tasks array

      Args:
        text (str) - the text of the task
        due (str) - the due date for the task
    */
    
    // randomly create a new task ID
    const newID = crypto.randomUUID();

    // make the new task object - new tasks are always created as incomplete
    const newTask = {
      id: newID,
      text: text,
      due: due || '',
      completed: false
    };

    // keep the current tasks and add the new one
    setTasks(prev => [...prev, newTask]);
  }

  function deleteTask(id) {
    /*
      deletes a task from the task list

      Args:
        id (int | str) - the id of the task to delete 
    */
    setTasks(prev => prev.filter((task) => task.id !== id));
  }

  function toggleTheme() {
    /*
      toggles the current theme from light -> dark
      or dark -> light
    */
    
    // if in dark mode, set to light mode, else set to dark mode
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  function markComplete(id) {
    /*
      marks a task as complete/incomplete

      Args:
        id id (int | str) - the task id
    */

    // make a new array where the matching task gets a copy with
    // completed flipped, and every other task stays the same
    setTasks(prev =>
      // for each task in the previous task list, find the one to mark
      // complete by id and set it to the opposite bool value
      // and keep the other tasks the same
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // tasks completed
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className={`App ${theme}`}>
      <Header
        currentView={currentView}
        onChangeView={setView}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* toggle between the 3 different views */}
        {
          // using this syntax, if the condition passes then the fragement
          // and nested elements are shown and this is cleaner and shorter
          // than if/else blocks
          currentView === 'Classes' && (
            <>
              <h2 className="view-title">Classes</h2>
              <ClassList classList={classes} />
            </>
          )
        }
        {
          currentView === 'To-Do' && (
            <>
              <h2 className="view-title">To-Do</h2>
              <TaskForm addTask={addTask} />
              <TaskSummary completed={completedCount} total={tasks.length} />
              <TaskList tasks={tasks} markComplete={markComplete} deleteTask={deleteTask} />
            </>
          )
        }
        {
          currentView === 'About' && (
            <>
              <h2 className="view-title">About this Project</h2>
              <p className="about-text">{ABOUT_PROJECT}</p>
            </>
          )
        }
      </main>
    </div>
  );
}

export default App;
