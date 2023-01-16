import React from 'react';

// Components
import Sheet from './Sheet';

export default function SheetList(props) {

  // Props
  const { sheetList } = props;

  return (
    <div>
      {sheetList.map(sheet => (
        <Sheet
          sheet={sheet}
          key={sheet.id}
        />
      ))}
    </div>
  );
};