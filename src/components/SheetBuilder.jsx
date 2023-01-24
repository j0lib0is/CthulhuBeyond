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
      <form className='mx-auto max-w-sm bg-gray-700 border-solid border-1 border-gray-300 rounded-md p-4'>
        <label>
          <h5>Character Name</h5>
          <input
            onChange={onChange}
            name='characterName'
            value={sheetValues.characterName}
            type='text'
            placeholder='Character Name'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
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
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='constitution'
          />
        </label>

        <button className='w-full mt-4 bg-purple-500 text-white px-8 py-1 rounded-md' onClick={onSubmit} type='submit'>Submit</button>
      </form>
    </>
  );
};