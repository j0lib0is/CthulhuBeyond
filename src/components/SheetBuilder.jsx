import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SheetBuilder(props) {

  // Props
  const { changeHandler, submitHandler, sheetValues } = props;

  // Router
  let navigate = useNavigate();

  // Functions
  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'number' ? +e.target.value : e.target.value;
    changeHandler(e.target.name, value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler();
    navigate('/characters');
  }

  return (
    <>
      <form className='form'>
        <label>
          <h5>Character Name</h5>
          <input
            onChange={onChange}
            name='characterName'
            value={sheetValues.characterName}
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
            value={sheetValues.race}
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
            value={sheetValues.charisma}
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
            value={sheetValues.intelligence}
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
            value={sheetValues.wisdom}
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
            value={sheetValues.strength}
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
            value={sheetValues.dexterity}
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
            value={sheetValues.constitution}
            type='number'
            placeholder='Constitution'
            className='form-field'
            id='constitution'
          />
        </label>

        <button onClick={onSubmit} className='submit' type='submit'>Submit</button>
      </form>
    </>
  );
};