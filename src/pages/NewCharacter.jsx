import React, { useState } from 'react';

// Components
import SheetBuilder from '../components/SheetBuilder';

export default function NewCharacter(props) {

  // Props
  const { sheetList, setSheetList, sheetValues, changeHandler, submitHandler } = props;

  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <h1>Build a New Character</h1>
        </header>
        <SheetBuilder
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          sheetValues={sheetValues}
        />
      </div>
    </div>
  )
}