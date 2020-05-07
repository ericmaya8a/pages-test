import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 not found</h1>
      <Link className="active" to="/dashboard">
        Go home
      </Link>
    </>
  );
}

export default NotFound;
