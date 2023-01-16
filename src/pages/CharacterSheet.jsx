import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterSheet(props) {

  // Props
  const { sheetList, changeHandler, submitHandler } = props;

  // State
  const [character, setCharacter ] = useState({});

  // Params
  let { characterId } = useParams();

  // Use Effect
  useEffect(() => {
    const foundCharacter = sheetList.find(sheet => sheet.id == {characterId}.characterId);
    setCharacter(foundCharacter);
  }, []);

  // Functions
  // const onChange = (e) => {
  //   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'number' ? +e.target.value : e.target.value;
  //   changeHandler(e.target.name, value);
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   submitHandler();
  // }

  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <h1>{ character.characterName }</h1>
          <p>Race: {character.race}</p>
        </header>
      </div>
    </div>
  )
}