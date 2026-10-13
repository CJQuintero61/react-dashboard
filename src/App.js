/*
  App.js
  
  this is the js for start of the webpage
*/
import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  // currentView - the view currently being displayed (Classes on page load)
  // setView - updates currentView and re-renders the app to show the new view
  const [currentView, setView] = useState('Classes');
  const [tasks, setTasks] = useState(
    // some default tasks to show on page load
    [
      {
        id: 1,
        text: 'React Student Dashboard',
        due: '2026-10-18',
        completed: false
      },
      {
        id: 2,
        text: 'Semantics and Code Gen modules for compiler',
        due: '2026-10-18',
        completed: false
      },
      {
        id: 3,
        text: 'Continue learning Rust for project',
        due: 'Sometime in November',
        completed: false
      }
    ]
  );

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
      due: due || 'No due date',
      completed: false
    };

    // keep the current tasks and add the new one
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    /*
      deletes a task from the task list

      Args:
        id (int | str) - the id of the task to delete 
    */
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Header currentView={currentView} onChangeView={setView} />

      <main>
        {/* toggle between the 3 different views */}
        {
          currentView === 'Classes' &&
          <p>Classes Section</p>
        }
        {
          currentView === 'To-Do' && (
            <>
              <TaskForm addTask={addTask} />
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </>
          )
        }
        {
          currentView === 'Projects' &&
          <p>Projects Section</p>
        }
      </main>
    </div>
  );
}

export default App;
