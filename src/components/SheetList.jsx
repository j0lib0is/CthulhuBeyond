import React from 'react';

// Components
import Sheet from './Sheet';

const SheetList = (props) => {
  // Expand props
  const { sheetList } = props;

  return (
    <div>
      {sheetList.map(sheet => (<Sheet name={sheet.name} key={sheet.id} />))}
    </div>
  );
};

export default SheetList;