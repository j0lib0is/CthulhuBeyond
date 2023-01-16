import './App.css'
import React, { useState, useEffect } from 'react';

// Components
import SheetBuilder from './components/SheetBuilder';
import SheetList from './components/SheetList';

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
  id: Math.random() * 100000
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
      id: Math.random() * 100000
    }
    setSheetList([...sheetList, newSheet]);
    setSheetValues(defaultSheetValues);
    // postSheet(newSheet);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <h1>My Character Sheets</h1>
          <button>New Character</button>
        </header>
        <SheetBuilder
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          sheetValues={sheetValues}
        />
        <SheetList sheetList={sheetList} />
      </div>
    </div>
  )
}
