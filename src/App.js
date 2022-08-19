import React from 'react';
import './App.css';
//import CharaacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Messenger";
function App() {
  return (
    <div>
      {
        <WordCard value={word}/>
      }
      
    </div>
  );
}

export default App;
