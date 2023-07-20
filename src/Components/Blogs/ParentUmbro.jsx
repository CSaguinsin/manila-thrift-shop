import React from 'react';
import Umbro from './Umbro';

function ParentUmbro({ showUmbro }) {
  return (
    <div>
      {showUmbro ? (
        <Umbro />
      ) : null}
    </div>
  );
}

export default ParentUmbro;