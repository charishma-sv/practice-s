import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>HOme</div>
      <Link to="/donate">Donate</Link>
    </div>
  );
}

export default Home;
