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
    </div>
  );
}

export default App;
