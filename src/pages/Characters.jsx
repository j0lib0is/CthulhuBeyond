import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import SheetList from '../components/SheetList';

export default function Characters({ sheetList }) {

  let navigate = useNavigate();

  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <h1>My Characters</h1>
          <button onClick={() => { navigate('/new') }}>Create New Character</button>
        </header>
        <SheetList sheetList={sheetList} />
      </div>
    </div>
  )
}