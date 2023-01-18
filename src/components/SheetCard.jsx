import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sheet(props) {

  // Props
  const { sheetList, setSheetList, sheet } = props;
  
  // Routes
  let navigate = useNavigate();

  // Functions
  const onDelete = () => {
    const i = sheetList.findIndex(item => item.id === sheet.id);
    const newSheetList = [...sheetList];
    newSheetList.splice(i, 1);
    setSheetList(newSheetList);
  };

  return (
    <div className='sheetCard'>
      <h4>{sheet.characterName}</h4>
      <p className='race'>{sheet.race}</p>
      <div className='stat'><h5>Charisma:</h5><p>{sheet.charisma}</p></div>
      <div className='stat'><h5>Intelligence:</h5><p>{sheet.intelligence}</p></div>
      <div className='stat'><h5>Wisdom:</h5><p>{sheet.wisdom}</p></div>
      <div className='stat'><h5>Strength:</h5><p>{sheet.strength}</p></div>
      <div className='stat'><h5>Dexterity:</h5><p>{sheet.dexterity}</p></div>
      <div className='stat'><h5>Constitution:</h5><p>{sheet.constitution}</p></div>
      <div className='actions'>
        <button onClick={() => navigate(`/character/${sheet.id}`)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};