import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Notes from './components/notes/Notes';
import Button from './components/addButton/Button';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='mainPage'>
      <Header></Header>
      <div>
        <Notes text='note1'></Notes>
        <Notes text='note2'></Notes>
        <Notes text='note3'></Notes>

        <Button></Button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
