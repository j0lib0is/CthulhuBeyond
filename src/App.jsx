import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterSheet from './pages/CharacterSheet';
import NewCharacter from './pages/NewCharacter';

// Defaults
const defaultSheetValues = {
  characterName: '',
  race: '',
  charisma: 0,
  intelligence: 0,
  wisdom: 0,
  strength: 0,
  dexterity: 0,
  constitution: 0,
  id: 0
}

export default function App() {

  // State
  const [sheetList, setSheetList] = useState([]);
  const [sheetValues, setSheetValues] = useState(defaultSheetValues);

  // Helpers
  // const postSheet = newSheet => {
  //   axios.post('url', newSheet)
  //     .then(res => {
  //       console.log(res);
  //       setSheetList([res.data, ...sheetList]);
  //     })
  //     .catch(err => console.error(err))
  //     .finally(setSheetValues(defaultSheetValues))
  // }

  // Use Effect
  useEffect(() => {
    getLocalSheets();
  }, []);

  useEffect(() => {
    saveSheetsLocally();
  }, [sheetList]);

  // Functions
  const saveSheetsLocally = () => {
    if (sheetList.length > 0) {
      localStorage.setItem('localSheets', JSON.stringify(sheetList));
    } else {
      localStorage.removeItem('localSheets');
    }
  };


  const getLocalSheets = () => {
    if (localStorage.getItem('localSheets') === null) {
      localStorage.setItem('localSheets', JSON.stringify([]));
    } else {
      let currentSheets = JSON.parse(localStorage.getItem('localSheets'));
      setSheetList(currentSheets);
    }
  };

  const changeHandler = (name, value) => {
    setSheetValues({ ...sheetValues, [name]: value });
  };

  const submitHandler = () => {
    const newSheet = {
      characterName: sheetValues.characterName,
      race: sheetValues.race,
      charisma: sheetValues.charisma,
      intelligence: sheetValues.intelligence,
      wisdom: sheetValues.wisdom,
      strength: sheetValues.strength,
      dexterity: sheetValues.dexterity,
      constitution: sheetValues.constitution,
      id: Math.floor(Math.random() * 100000)
    }
    setSheetList([...sheetList, newSheet]);
    setSheetValues(defaultSheetValues);
    // postSheet(newSheet);
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <Router>
        <nav className='w-full flex justify-center p-4'>
          <Link className='mx-4 text-center' to='/'>Home</Link>
          <Link className='mx-4 text-center' to='/characters'>My Characters</Link>
          <Link className='mx-4 text-center' to='/new-character'>New Character</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={
            <Characters
              sheetList={sheetList}
              setSheetList={setSheetList}
            />
          } />
          <Route path='/character/:characterId' element={
            <CharacterSheet
              sheetList={sheetList}
              sheetValues={sheetValues}
              setSheetValues={setSheetValues}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          } />
          <Route path='/new-character' element={
            <NewCharacter
              sheetList={sheetList}
              setSheetList={setSheetList}
              sheetValues={sheetValues}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          } />
          <Route path='*' element={<Error />} />
        </Routes>
        <div className='text-center p-4'>
          <p>2023 Copyright Cthulhu Beyond. All rights reserved.</p>
        </div>
      </Router>
    </div>
  )
}
