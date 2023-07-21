import React from 'react';
import DjDuo from './DjDuo';

function ParentDjDuo({ showDjDuo }) {
  return (
    <div>
      {showDjDuo ? <DjDuo /> : null}
    </div>
  );
}

export default ParentDjDuo;
