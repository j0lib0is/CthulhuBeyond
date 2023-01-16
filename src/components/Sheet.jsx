import React from 'react';

const Sheet = (props) => {
  
  // Expand props
  const { sheet } = props;

  return (
    <div>
      <div className='sheetCard'>
        <h3>{sheet.characterName}</h3>
        <h5 className='race'>{sheet.race}</h5>
        <div className='stat'><h5>Charisma:</h5><p>{sheet.charisma}</p></div>
        <div className='stat'><h5>Intelligence:</h5><p>{sheet.intelligence}</p></div>
        <div className='stat'><h5>Wisdom:</h5><p>{sheet.wisdom}</p></div>
        <div className='stat'><h5>Strength:</h5><p>{sheet.strength}</p></div>
        <div className='stat'><h5>Dexterity:</h5><p>{sheet.dexterity}</p></div>
        <div className='stat'><h5>Constitution:</h5><p>{sheet.constitution}</p></div>
      </div>
    </div>
  );
};

export default Sheet;