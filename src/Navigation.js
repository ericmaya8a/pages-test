import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/dashboard">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/users">
          Users
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
