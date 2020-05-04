import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const isActive = (match, location) =>
    match && match.url === location.pathname;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" isActive={isActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" isActive={isActive}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" isActive={isActive}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
