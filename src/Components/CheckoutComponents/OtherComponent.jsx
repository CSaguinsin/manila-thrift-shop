import React from 'react';
import { Link } from 'react-router-dom';

function OtherComponent() {
  return (
    <>
      <Link to="/home" className="text-sm leading-none">Back</Link>
    </>
  );
}

export default OtherComponent;