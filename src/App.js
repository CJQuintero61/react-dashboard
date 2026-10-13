/*
  App.js
  
  this is the js for start of the webpage
*/
import { useState } from 'react';
import './App.css';

import Header from './components/Header';

function App() {

  // currentView - the view currently being displayed (Classes on page load)
  // setView - updates currentView and re-renders the app to show the new view
  const [currentView, setView] = useState('Classes');

  return (
    <div className="App">
      <Header currentView={currentView} onChangeView={setView} />

      <main>
        {/* toggle between the 3 different views */}
        {currentView === 'Classes' && <p>Classes Section</p>}
        {currentView === 'To-Do' && <p>To-Do Section</p>}
        {currentView === 'Projects' && <p>Projects Section</p>}
      </main>
    </div>
  );
}

export default App;
