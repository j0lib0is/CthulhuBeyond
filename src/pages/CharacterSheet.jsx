import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CharacterSheet(props) {

  // Props
  const { sheetList, submitHandler } = props;

  // State
  const [character, setCharacter] = useState({});

  // Router
  let { characterId } = useParams();
  let navigate = useNavigate();
  

  // Use Effect
  useEffect(() => {
    const foundCharacter = sheetList.find(sheet => sheet.id == { characterId }.characterId);
    setCharacter(foundCharacter);
  }, []);

  // Functions
  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'number' ? +e.target.value : e.target.value;
    setCharacter({ ...character, [e.target.name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const i = sheetList.findIndex(sheet => sheet.id === character.id);
    sheetList[i] = character;
    navigate('/characters');
  };

  return (
    <>
      <header>
        <h1>{character.characterName}</h1>
        <p>Race: {character.race}</p>
        <p>Charisma: {character.charisma}</p>
        <p>Intelligence: {character.intelligence}</p>
        <p>Wisdom: {character.wisdom}</p>
        <p>Strength: {character.strength}</p>
        <p>Dexterity: {character.dexterity}</p>
        <p>Constitution: {character.constitution}</p>
      </header>
      <section>
        <div className='narrow-container'>
          <form className='form'>
          <label>
            <h5>Character Name</h5>
            <input
              onChange={onChange}
              name='characterName'
              value={character.characterName || ''}
              type='text'
              placeholder='Character Name'
              className='form-field'
              id='characterName'
            />
          </label>
    
          <label>
            <h5>Race</h5>
            <input
              onChange={onChange}
              name='race'
              value={character.race || ''}
              type='text'
              placeholder='Race'
              className='form-field'
              id='race'
            />
          </label>
    
          <label>
            <h5>Charisma</h5>
            <input
              onChange={onChange}
              name='charisma'
              value={character.charisma || 0}
              type='number'
              placeholder='Charisma'
              className='form-field'
              id='charisma'
            />
          </label>
    
          <label>
            <h5>Intelligence</h5>
            <input
              onChange={onChange}
              name='intelligence'
              value={character.intelligence || 0}
              type='number'
              placeholder='Intelligence'
              className='form-field'
              id='intelligence'
            />
          </label>
    
          <label>
            <h5>Wisdom</h5>
            <input
              onChange={onChange}
              name='wisdom'
              value={character.wisdom || 0}
              type='number'
              placeholder='Wisdom'
              className='form-field'
              id='wisdom'
            />
          </label>
    
          <label>
            <h5>Strength</h5>
            <input
              onChange={onChange}
              name='strength'
              value={character.strength || 0}
              type='number'
              placeholder='Strength'
              className='form-field'
              id='strength'
            />
          </label>
    
          <label>
            <h5>Dexterity</h5>
            <input
              onChange={onChange}
              name='dexterity'
              value={character.dexterity || 0}
              type='number'
              placeholder='Dexterity'
              className='form-field'
              id='dexterity'
            />
          </label>
    
          <label>
            <h5>Constitution</h5>
            <input
              onChange={onChange}
              name='constitution'
              value={character.constitution || 0}
              type='number'
              placeholder='Constitution'
              className='form-field'
              id='constitution'
            />
          </label>
    
          <button onClick={onSubmit} className='submit' type='submit'>Save</button>
        </form>
        </div>
      </section>
    </>
  )
}