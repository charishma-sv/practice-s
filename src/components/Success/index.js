import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div>
      <div>Success</div>
      <Link to="/donate">Go to Donate</Link>
    </div>
  );
}

export default Success;
