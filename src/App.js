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
  const [classes] = useState(
    // my 4 classes to show on the classes page
    [
      {
        id: 1,
        courseName: 'Principles of Programming Languages',
        desc: `Learn how the compiler turns high-level source code into machine code
        and the many parts of the compiler, the syntax of programming languages and language design,
        parse trees, and other language design topics.`
      },
      {
        id: 2,
        courseName: 'Internet Programming',
        desc: `Internet Programming teaches you about front-end development and later about full-stack
        development by using hands-on learning and projects. I will eventually be making a full-stack
        app with a backend, frontend, database, and api.`
      },
      {
        id: 3,
        courseName: 'Algorithms',
        desc: `Your typical DSA class that every computer science student takes. We learn a few of the common
        searching and sorting algorithms, basic and some advanced data structures, and discuss mock interview
        questions to prepare for future job interviews that test algorithm knowledge.`
      },
      {
        id: 4,
        courseName: 'Introduction to Computer Vision and Image Processing',
        desc: `We learn about linear classifiers, neural networks, CNNs, and other similar
        computer vision topics. This introductory course has math, coding, deep learning, and
        other topics all combined into the curriculum.`
      }
    ]
  );
  // for the theme toggle - it starts in dark mode
  const [theme, setTheme] = useState('dark');

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
          currentView === 'Projects' && (
            <>
              <h2 className="view-title">Projects</h2>
            </>
          )
        }
      </main>
    </div>
  );
}

export default App;
