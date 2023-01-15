import React from 'react';

const SheetBuilder = (props) => {
  // Expand props
  const { name, setName, sheetList, setSheetList } = props;

  // Functions
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newSheet = {
      name: name,
      id: Math.random() * 1000
    }
    setSheetList([...sheetList, newSheet])
    setName('');
    console.log(newSheet);
  };

  return (
    <div>
      <form className='form'>
        <input onChange={nameHandler} value={name} type='text' placeholder='Character Name' className='form-field' />
        <button onClick={submitHandler} className='submit' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SheetBuilder;