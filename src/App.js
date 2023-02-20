import './App.css';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Notes from './components/notes/Notes';
import Button from './components/addButton/Button';
import Footer from './components/footer/Footer';


function App() {
  const [notes, setNote] = useState([]);

  return (
    <div className='mainPage'>
      <Header></Header>

      <div>
        <Notes notes={notes} setNote={setNote}></Notes>

        <Button notes={notes} setNote={setNote} initObj={createInitObj()}></Button>
      </div>

      <Footer></Footer>
    </div>
  );
}

function createInitObj() {
  return {
    id: nanoid(),
    text: 'hi',
    isEdit: false,
  };
}

export default App;
