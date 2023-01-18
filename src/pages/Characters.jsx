import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import SheetList from '../components/SheetList';

export default function Characters(props) {

  // Props
  const { sheetList, setSheetList } = props;

  // Routes
  let navigate = useNavigate();

  return (
    <>
      <header>
        <h1>My Characters</h1>
        <button onClick={() => { navigate('/new-character') }}>Create New Character</button>
      </header>
      <section>
        <SheetList sheetList={sheetList} setSheetList={setSheetList} />
      </section>
    </>
  )
}