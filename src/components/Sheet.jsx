import React from 'react';

const Sheet = (props) => {
  // Expand props
  const { name } = props;

  // Functions

  return (
    <div>
      <div className='sheetCard'>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Sheet;