import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterSheet from './pages/CharacterSheet';
import NewCharacter from './pages/NewCharacter';

// Import Context
import { SheetListProvider } from './context/SheetListContext';
import { SheetProvider } from './context/SheetContext';

export default function App() {

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

  return (
    <div className='max-w-2xl mx-auto'>
      <SheetListProvider>
        <SheetProvider>
          <Router>
            <nav className='w-full flex justify-center p-4'>
              <Link className='mx-4 text-center' to='/'>Home</Link>
              <Link className='mx-4 text-center' to='/characters'>My Characters</Link>
              <Link className='mx-4 text-center' to='/new-character'>New Character</Link>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/characters' element={
                <Characters />
              } />
              <Route path='/character/:characterId' element={
                <CharacterSheet />
              } />
              <Route path='/new-character' element={
                <NewCharacter />
              } />
              <Route path='*' element={<Error />} />
            </Routes>
            <div className='text-center p-4'>
              <p>2023 Copyright Cthulhu Beyond. All rights reserved.</p>
            </div>
          </Router>
        </SheetProvider>
      </SheetListProvider>
    </div>
  )
}
