import './App.css'
import React, { useState, useEffect } from 'react';

// Components
import SheetBuilder from './components/SheetBuilder';
import SheetList from './components/SheetList';

export default function App() {

  // State
  const [sheetList, setSheetList] = useState([]);
  const [name, setName] = useState('');

  // Use Effect

  // Functions

  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <h1>My Character Sheets</h1>
        </header>
        <SheetBuilder
          name={name}
          setName={setName}
          sheetList={sheetList}
          setSheetList={setSheetList}
        />
        <SheetList sheetList={sheetList} />
      </div>
    </div>
  )
}
